const { body } = require("express-validator");

class Validator {
  register() {
    return [
      body("username")
        .notEmpty()
        .withMessage("username is required")
        .isLength({ min: 2, max: 20 })
        .withMessage(
          "username should be less than 20 char and more than 2 char"
        ),
      body("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({ min: 5, max: 20 })
        .withMessage(
          "password should be less than 20 char and more than 5 char"
        ),
    ];
  }

  login() {
    return [
      body("username")
        .notEmpty()
        .withMessage("username is required")
        .isLength({ min: 2, max: 20 })
        .withMessage(
          "username should be less than 20 char and more than 2 char"
        ),
      body("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({ min: 5, max: 20 })
        .withMessage(
          "password should be less than 20 char and more than 5 char"
        ),
    ];
  }
}

module.exports = {
  authValidator: new Validator(),
};
