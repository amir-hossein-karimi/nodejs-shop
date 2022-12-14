const Router = require("express").Router();
const { AuthController } = require("../controllers/auth.controller");
const { errorParser } = require("../middlewares/errorParser");
const { authValidator } = require("../validations/auth.validator");

/**
 * @swagger
 * tags:
 *  name: auth
 */

Router.post(
  "/register",
  authValidator.register(),
  errorParser,
  AuthController.register
);

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: this is login api please enter your username and password
 *    tags: [auth]
 *    parameters:
 *    - name: username
 *      required: true
 *      in: formData
 *      type: string
 *      description: enter your username
 *    - name: password
 *      required: true
 *      in: formData
 *      type: string
 *      description: enter your password
 *    responses:
 *      200:
 *        description: successfull login
 *      404:
 *        description: fail login
 *      500:
 *        description: internal error
 */
Router.post("/login", authValidator.login(), errorParser, AuthController.login);

module.exports = {
  authRoutes: Router,
};
