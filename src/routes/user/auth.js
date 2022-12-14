const Router = require("express").Router();
const {
  AuthController,
} = require("../../controllers/users/userAuth.controller");
const { errorParser } = require("../../middlewares/errorParser");
const { authValidator } = require("../../validations/auth.validator");

/**
 * @swagger
 * tags:
 *  name: userAuth
 */

/**
 * @swagger
 * /user/auth/register:
 *  post:
 *    summary: this is register , enter your username and a password to create your profile
 *    tags: [userAuth]
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
 *      201:
 *        description: create user
 *      400:
 *        description: bad request
 *      500:
 *        description: internal error
 */
Router.post(
  "/register",
  authValidator.register(),
  errorParser,
  AuthController.register
);

/**
 * @swagger
 * /user/auth/login:
 *  post:
 *    summary: this is login api please enter your username and password
 *    tags: [userAuth]
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
 *      400:
 *        description: bad request
 *      500:
 *        description: internal error
 */
Router.post("/login", authValidator.login(), errorParser, AuthController.login);

module.exports = {
  authRoutes: Router,
};
