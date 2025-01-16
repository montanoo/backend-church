import express from "express";
import {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/users.controller";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint is used to create a new user.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: parish01
 *               email:
 *                 type: string
 *                 example: parish01@gmail.com
 *               password:
 *                 type: string
 *                 example: parishchurch123
 *               role:
 *                 type: string
 *                 example: main parish
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createUser); // Create

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: This endpoint retrieves all users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   role:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/", getUser); // Read all

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: This endpoint retrieves a specific user by its ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 role:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getUserById); // Read one

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: This endpoint updates a specific user by its ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: parish02
 *               email:
 *                 type: string
 *                 example: parish02@gmail.com
 *               password:
 *                 type: string
 *                 example: parishchurch1234
 *               role:
 *                 type: string
 *                 example: main parish
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 */
router.put("/:id", updateUser); // Update

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: This endpoint deletes a specific user by its ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/:id", deleteUser); // Delete

export default router;