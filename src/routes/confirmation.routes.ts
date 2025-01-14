import express from "express";
import {
  createConfirmation,
  getConfirmationById,
  getAllConfirmations,
  updateConfirmation,
  deleteConfirmation,
} from "../controllers/confirmation.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Confirmations
 *   description: API for managing confirmations
 */

/**
 * @swagger
 * /api/confirmations:
 *   post:
 *     summary: Create a new confirmation
 *     tags: [Confirmations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               confirmedName:
 *                 type: string
 *               confirmationDate:
 *                 type: string
 *                 format: date-time
 *               parishId:
 *                 type: integer
 *               book:
 *                 type: string
 *               folio:
 *                 type: string
 *               diocese:
 *                 type: string
 *               bishopName:
 *                 type: string
 *               age:
 *                 type: integer
 *               motherName:
 *                 type: string
 *               fatherName:
 *                 type: string
 *               godparents:
 *                 type: string
 *               pastorName:
 *                 type: string
 *               pastorEmail:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Confirmation created successfully
 *       500:
 *         description: Error creating confirmation
 */
router.post("/", createConfirmation);

/**
 * @swagger
 * /api/confirmations/{id}:
 *   get:
 *     summary: Get a confirmation by ID
 *     tags: [Confirmations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The confirmation ID
 *     responses:
 *       200:
 *         description: Confirmation retrieved successfully
 *       404:
 *         description: Confirmation not found
 *       500:
 *         description: Error retrieving confirmation
 */
router.get("/:id", getConfirmationById);

/**
 * @swagger
 * /api/confirmations:
 *   get:
 *     summary: Get all confirmations
 *     tags: [Confirmations]
 *     responses:
 *       200:
 *         description: Confirmations retrieved successfully
 *       500:
 *         description: Error retrieving confirmations
 */
router.get("/", getAllConfirmations);

/**
 * @swagger
 * /api/confirmations/{id}:
 *   put:
 *     summary: Update a confirmation by ID
 *     tags: [Confirmations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The confirmation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               confirmedName:
 *                 type: string
 *               confirmationDate:
 *                 type: string
 *                 format: date-time
 *               parishId:
 *                 type: integer
 *               book:
 *                 type: string
 *               folio:
 *                 type: string
 *               diocese:
 *                 type: string
 *               bishopName:
 *                 type: string
 *               age:
 *                 type: integer
 *               motherName:
 *                 type: string
 *               fatherName:
 *                 type: string
 *               godparents:
 *                 type: string
 *               pastorName:
 *                 type: string
 *               pastorEmail:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: Confirmation updated successfully
 *       500:
 *         description: Error updating confirmation
 */
router.put("/:id", updateConfirmation);

/**
 * @swagger
 * /api/confirmations/{id}:
 *   delete:
 *     summary: Delete a confirmation by ID
 *     tags: [Confirmations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The confirmation ID
 *     responses:
 *       204:
 *         description: Confirmation deleted successfully
 *       500:
 *         description: Error deleting confirmation
 */
router.delete("/:id", deleteConfirmation);

export default router;