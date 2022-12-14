const { hashString } = require("../../utils/bcrypt");
const { userModel } = require("../../models/users");

class User {
  addUser = async ({ username, password }) => {
    const hashedPassword = hashString(password);

    const user = await userModel.create({
      username,
      password: hashedPassword,
    });

    if ((user?._doc && !user?._doc?._id) || !user?._id)
      return { success: false };

    return {
      success: true,
      ...(user?._doc
        ? { id: user?._doc?._id, username: user?._doc?.username }
        : { id: user?._id, username: user?.username }),
    };
  };

  findOneUser = async (payload, ignore) => {
    const user = await userModel.findOne(payload, ignore);

    if ((user?._doc && !user?._doc?._id) || !user?._id)
      return { success: false };

    return { ...(user?._doc ? user?._doc : user), success: true };
  };
}

module.exports = {
  user: new User(),
};
