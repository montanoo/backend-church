import express from "express";
import {
  createHall,
  getHallById,
  getAllHalls,
  updateHall,
  deleteHall,
} from "../controllers/hall.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Halls
 *   description: API for managing halls
 */

/**
 * @swagger
 * /api/halls:
 *   post:
 *     summary: Create a new hall
 *     tags: [Halls]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hallName:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               parishId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Hall created successfully
 *       500:
 *         description: Error creating hall
 */
router.post("/", createHall);

/**
 * @swagger
 * /api/halls/{id}:
 *   get:
 *     summary: Get a hall by ID
 *     tags: [Halls]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hall ID
 *     responses:
 *       200:
 *         description: Hall retrieved successfully
 *       404:
 *         description: Hall not found
 *       500:
 *         description: Error retrieving hall
 */
router.get("/:id", getHallById);

/**
 * @swagger
 * /api/halls:
 *   get:
 *     summary: Get all halls
 *     tags: [Halls]
 *     responses:
 *       200:
 *         description: Halls retrieved successfully
 *       500:
 *         description: Error retrieving halls
 */
router.get("/", getAllHalls);

/**
 * @swagger
 * /api/halls/{id}:
 *   put:
 *     summary: Update a hall by ID
 *     tags: [Halls]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hall ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hallName:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               parishId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hall updated successfully
 *       500:
 *         description: Error updating hall
 */
router.put("/:id", updateHall);

/**
 * @swagger
 * /api/halls/{id}:
 *   delete:
 *     summary: Delete a hall by ID
 *     tags: [Halls]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hall ID
 *     responses:
 *       204:
 *         description: Hall deleted successfully
 *       500:
 *         description: Error deleting hall
 */
router.delete("/:id", deleteHall);

export default router;