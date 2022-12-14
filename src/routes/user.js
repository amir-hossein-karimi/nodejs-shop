const Router = require("express").Router();

Router.get("/test", (req, res, next) => {
  res.send("users test app");
});

module.exports = {
  usersRoutes: Router,
};
