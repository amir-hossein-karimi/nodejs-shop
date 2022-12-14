const Router = require("express").Router();
const { authRoutes } = require("./auth");
const { productsRoutes } = require("./products");
const { usersRoutes } = require("./user");
/**
 * @swagger
 * tags:
 *  name: index
 */
/**
 * @swagger
 * /:
 *  get:
 *    summary: index
 *    tags: [index]
 *    responses:
 *      200:
 *        description: success
 */
Router.get("/", (req, res, next) => {
  res.send("index page");
});

Router.use("/auth", authRoutes);
Router.use("/users", usersRoutes);
Router.use("/products", productsRoutes);

module.exports = {
  Routes: Router,
};
