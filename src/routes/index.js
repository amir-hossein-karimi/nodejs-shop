const Router = require("express").Router();
const { authRoutes } = require("./user/auth");
const { productsRoutes } = require("./common/products");

Router.use("/user/auth", authRoutes);
Router.use("/common/products", productsRoutes);

module.exports = {
  Routes: Router,
};
