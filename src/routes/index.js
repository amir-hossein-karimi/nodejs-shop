const Router = require("express").Router();
const { authRoutes } = require("./common/auth");
const { productsRoutes } = require("./common/products");
const { usersRoutes } = require("./common/users");
const { cartRoutes } = require("./user/cart");

Router.use("/auth", authRoutes);
Router.use("/products", productsRoutes);
Router.use("/user", usersRoutes);
Router.use("/cart", cartRoutes);

module.exports = {
  Routes: Router,
};
