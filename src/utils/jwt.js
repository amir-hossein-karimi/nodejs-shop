const jwt = require("jsonwebtoken");
const { JWT_EXPIRE_TIME, JWT_SECRET_KEY } = require("../constants");

const createJWT = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_TIME,
  });

  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};

module.exports = {
  createJWT,
  verifyToken,
};
