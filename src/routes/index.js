const Router = require("express").Router();
const { authRoutes } = require("./auth");
const { productsRoutes } = require("./products");
const { usersRoutes } = require("./user");

Router.use("/auth", authRoutes);
Router.use("/users", usersRoutes);
Router.use("/products", productsRoutes);

module.exports = {
  Routes: Router,
};
