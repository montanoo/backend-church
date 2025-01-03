import express from "express";
import {
  createToken,
  getTokenById,
  getAllTokens,
  updateToken,
  deleteToken,
} from "../controllers/token.controller";

const router = express.Router();

/**
 * @swagger
 * /tokens:
 *   post:
 *     summary: Create a new token
 *     tags: [Tokens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               refreshToken:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               userId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Token created successfully
 *       500:
 *         description: Error creating token
 */
router.post("/", createToken);

/**
 * @swagger
 * /tokens/{id}:
 *   get:
 *     summary: Get a token by ID
 *     tags: [Tokens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The token ID
 *     responses:
 *       200:
 *         description: Token retrieved successfully
 *       404:
 *         description: Token not found
 *       500:
 *         description: Error retrieving token
 */
router.get("/:id", getTokenById);1

/**
 * @swagger
 * /tokens:
 *   get:
 *     summary: Get all tokens
 *     tags: [Tokens]
 *     responses:
 *       200:
 *         description: Tokens retrieved successfully
 *       500:
 *         description: Error retrieving tokens
 */
router.get("/", getAllTokens);

/**
 * @swagger
 * /tokens/{id}:
 *   put:
 *     summary: Update a token by ID
 *     tags: [Tokens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The token ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               refreshToken:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Token updated successfully
 *       500:
 *         description: Error updating token
 */
router.put("/:id", updateToken);

/**
 * @swagger
 * /tokens/{id}:
 *   delete:
 *     summary: Delete a token by ID
 *     tags: [Tokens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The token ID
 *     responses:
 *       204:
 *         description: Token deleted successfully
 *       500:
 *         description: Error deleting token
 */
router.delete("/:id", deleteToken);

export default router;