const PORT = 8000;
const DB_URL = "mongodb://localhost:27017/shop";

const JWT_EXPIRE_TIME = "60d";
const JWT_SECRET_KEY = "6650af8cdd64815e7bed88fa09163d62dc9897a2";

module.exports = {
  PORT,
  DB_URL,
  JWT_EXPIRE_TIME,
  JWT_SECRET_KEY,
};
