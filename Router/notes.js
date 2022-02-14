const express = require("express");
const router = express.Router();
const { Route } = require("express");
const controllerNotes = require("../Controller/notes");

/**
 * @swagger
 * /create_note:
 *  post:
 *    summary: Create data notes
 *    description: Numeric ID of the user to retrieve.
 *    tags: [NOTES]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                properties:
 *                   userId:
 *                     type: string
 *                     description: The user's name.
 *                     example: 1
 *                   nama:
 *                     type: string
 *                     description: The user's name.
 *                     example: kuwan
 *                   jadwal:
 *                     type: string
 *                     description: The user's password.
 *                     example: senin 14
 *                   catatan:
 *                     type: string
 *                     description: The user's isActive.
 *                     example: ngoding sampe mampos
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.post("/create_note", controllerNotes.createData);

/**
 * @swagger
 * /get_note:
 *  get:
 *    summary: Get data notes
 *    tags: [NOTES]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.get("/get_note", controllerNotes.getNote);

/**
 * @swagger
 * /update_note/{id}:
 *  put:
 *    summary: Update data notes
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [NOTES]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   nama:
 *                     type: string
 *                     description: The user's nama.
 *                     example: kuwan
 *                   jadwal:
 *                     type: string
 *                     description: The user's jadwal.
 *                     example: jumat 16
 *                   catatan:
 *                     type: string
 *                     description: The user's catatan.
 *                     example: mancing
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.put("/update_note/:id", controllerNotes.updateNote);

/**
 * @swagger
 * /delete_note/{id}:
 *  delete:
 *    summary: Delete data user
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [NOTES]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.delete("/delete_note/:id", controllerNotes.deleteNote);

module.exports = router;
