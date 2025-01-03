import express from "express";
import {
  createRecurringEvent,
  getRecurringEventById,
  getAllRecurringEvents,
  updateRecurringEvent,
  deleteRecurringEvent,
} from "../controllers/recurringEvent.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   nameeate a new recurring event
 *     tags: [RecurringEvents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:: RecurringEvents
 *   description: API for managing recurring events
 */

/**
 * @swagger
 * /recurring-events:
 *   post:
 *     summary: Cr
 *             type: object
 *             properties:
 *               recurringTitle:
 *                 type: string
 *               recurringDescription:
 *                 type: string
 *               dayOfWeek:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               organizerId:
 *                 type: integer
 *               hallId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Recurring event created successfully
 *       500:
 *         description: Error creating recurring event
 */
router.post("/", createRecurringEvent);

/**
 * @swagger
 * /recurring-events/{id}:
 *   get:
 *     summary: Get a recurring event by ID
 *     tags: [RecurringEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The recurring event ID
 *     responses:
 *       200:
 *         description: Recurring event retrieved successfully
 *       404:
 *         description: Recurring event not found
 *       500:
 *         description: Error retrieving recurring event
 */
router.get("/:id", getRecurringEventById);

/**
 * @swagger
 * /recurring-events:
 *   get:
 *     summary: Get all recurring events
 *     tags: [RecurringEvents]
 *     responses:
 *       200:
 *         description: Recurring events retrieved successfully
 *       500:
 *         description: Error retrieving recurring events
 */
router.get("/", getAllRecurringEvents);

/**
 * @swagger
 * /recurring-events/{id}:
 *   put:
 *     summary: Update a recurring event by ID
 *     tags: [RecurringEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The recurring event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recurringTitle:
 *                 type: string
 *               recurringDescription:
 *                 type: string
 *               dayOfWeek:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               organizerId:
 *                 type: integer
 *               hallId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Recurring event updated successfully
 *       500:
 *         description: Error updating recurring event
 */
router.put("/:id", updateRecurringEvent);

/**
 * @swagger
 * /recurring-events/{id}:
 *   delete:
 *     summary: Delete a recurring event by ID
 *     tags: [RecurringEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The recurring event ID
 *     responses:
 *       204:
 *         description: Recurring event deleted successfully
 *       500:
 *         description: Error deleting recurring event
 */
router.delete("/:id", deleteRecurringEvent);

export default router;