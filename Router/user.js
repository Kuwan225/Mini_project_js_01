const { Route } = require("express");
const express = require("express");
const router = express.Router();
const controllerUser = require("../Controller/user");
const middleware = require("../helper/middleware");

router.post("/user_login", middleware.autentication, controllerUser.userLogin);

/**
 * @swagger
 * /create_user:
 *  post:
 *    summary: Create data user
 *    description: Numeric ID of the user to retrieve.
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: kuwan
 *                   password:
 *                     type: string
 *                     description: The user's password.
 *                     example: kuwan
 *                   isActive:
 *                     type: boolean
 *                     description: The user's isActive.
 *                     example: true
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.post("/create_user", controllerUser.createUser);

/**
 * @swagger
 * /register:
 *  post:
 *    summary: register user
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
 *                   password:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.post("/register", controllerUser.register);
router.post("/login", middleware.autentication, controllerUser.login);
/**
 * @swagger
 * /get_all_user:
 *  get:
 *    summary: Get all data user
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.get("/get_all_user", controllerUser.getAllUser);
router.get("/get_user", controllerUser.getUser);
/**
 * @swagger
 * /get_one/{id}:
 *  get:
 *    summary: Get one data user
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.get("/get_one/:id", controllerUser.getOneUser);
/**
 * @swagger
 * /update_user/{id}:
 *  put:
 *    summary: update data user
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: kuwan
 *                   password:
 *                     type: string
 *                     description: The user's password.
 *                     example: kuwan
 *                   isActive:
 *                     type: boolean
 *                     description: The user's isActive.
 *                     example: true
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.put("/update_user/:id", controllerUser.updateUser);
/**
 * @swagger
 * /delete_user/{id}:
 *  delete:
 *    summary: delete data user
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.delete("/delete_user/:id", controllerUser.deleteUser);

/**
 * @swagger
 * /logout:
 *  get:
 *    summary: Logout user
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.get("/logout", controllerUser.logout);

module.exports = router;
