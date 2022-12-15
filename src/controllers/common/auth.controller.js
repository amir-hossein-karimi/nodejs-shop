const { user } = require("./users.controller");
const { compareStringWithHash } = require("../../utils/bcrypt");
const { createJWT } = require("../../utils/jwt");

class AuthController {
  register = async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const isExistUser = await user.findOneUser({ username });

      if (isExistUser.success)
        throw { status: 400, message: "user already exist" };

      const createUserResult = await user.addUser({ username, password });

      if (!createUserResult.success) throw {};

      res.status(201).json({
        status: 201,
        success: true,
        username: createUserResult.username,
        id: createUserResult.id,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const existUser = await user.findOneUser({ username });

      if (
        !existUser.success ||
        !compareStringWithHash(password, existUser.password)
      )
        throw { status: 400, message: "username or password is wrong" };

      const token = createJWT({ username });

      res.status(200).send({
        id: existUser._id,
        token,
        success: true,
        status: 200,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  AuthController: new AuthController(),
};
