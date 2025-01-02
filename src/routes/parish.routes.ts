import express from "express";
import {
    createParish,
    getParishById,
    getAllParishes,
    updateParish,
    deleteParish,
} from "../controllers/parish.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Parishes
 *   description: Parish management endpoints
 */

/**
 * @swagger
 * /api/parishes:
 *   post:
 *     summary: Create a new parish
 *     tags: [Parishes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parishName:
 *                 type: string
 *               parishLocation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Parish created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/", createParish);

/**
 * @swagger
 * /api/parishes/{id}:
 *   get:
 *     summary: Get a parish by ID
 *     tags: [Parishes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parish ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parish details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Parish not found
 */
router.get("/:id", getParishById);

/**
 * @swagger
 * /api/parishes:
 *   get:
 *     summary: Get all parishes
 *     tags: [Parishes]
 *     responses:
 *       200:
 *         description: List of all parishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", getAllParishes);

/**
 * @swagger
 * /api/parishes/{id}:
 *   put:
 *     summary: Update a parish by ID
 *     tags: [Parishes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parish ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parishName:
 *                 type: string
 *               parishLocation:
 *                 type: string
 *     responses:
 *       200:
 *         description: Parish updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put("/:id", updateParish);

/**
 * @swagger
 * /api/parishes/{id}:
 *   delete:
 *     summary: Delete a parish by ID
 *     tags: [Parishes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parish ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Parish deleted successfully
 */
router.delete("/:id", deleteParish);

export default router;

