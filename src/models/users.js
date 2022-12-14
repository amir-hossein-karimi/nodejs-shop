const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String },
  last_name: { type: String },
  wallet: { type: Number, default: 0 },
  token: { type: String, default: "" },
});

const userModel = model("user", userSchema);

module.exports = {
  userModel,
};
