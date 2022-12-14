const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const cartModel = model("cart", cartSchema);

module.exports = cartModel;
