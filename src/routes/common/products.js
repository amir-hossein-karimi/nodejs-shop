const Router = require("express").Router();

Router.get("/test", (req, res, next) => {
  res.send("products test app");
});

module.exports = {
  productsRoutes: Router,
};
