const Router = require("express").Router();

Router.get("/test", (req, res, next) => {
  res.send("cart test app");
});

module.exports = {
  cartRoutes: Router,
};
