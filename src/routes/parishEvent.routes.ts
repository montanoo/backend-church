import express from "express";
import {
  createParishEvent,
  getParishEvents,
  getParishEventById,
  updateParishEvent,
  deleteParishEvent,
} from "../controllers/parishEvent.controller";

const router = express.Router();

/**
 * @swagger
 * /api/parishEvents:
 *   post:
 *     summary: Create a new parish event
 *     description: This endpoint is used to create a new parish event.
 *     tags:
 *       - Parish Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Christmas Celebration
 *               description:
 *                 type: string
 *                 example: A grand celebration for Christmas
 *               startDateTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T18:00:00Z"
 *               endDateTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T22:00:00Z"
 *               organizerId:
 *                 type: integer
 *                 example: 1
 *               hallId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createParishEvent); // Create

/**
 * @swagger
 * /api/parishEvents:
 *   get:
 *     summary: Get all parish events
 *     description: This endpoint retrieves all parish events.
 *     tags:
 *       - Parish Events
 *     responses:
 *       200:
 *         description: A list of parish events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   startDateTime:
 *                     type: string
 *                     format: date-time
 *                   endDateTime:
 *                     type: string
 *                     format: date-time
 *                   organizerId:
 *                     type: integer
 *                   hallId:
 *                     type: integer
 *       500:
 *         description: Internal server error
 */
router.get("/", getParishEvents); // Read all

/**
 * @swagger
 * /api/parishEvents/{id}:
 *   get:
 *     summary: Get a parish event by ID
 *     description: This endpoint retrieves a specific parish event by its ID.
 *     tags:
 *       - Parish Events
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the parish event
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The details of the parish event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 startDateTime:
 *                   type: string
 *                   format: date-time
 *                 endDateTime:
 *                   type: string
 *                   format: date-time
 *                 organizerId:
 *                   type: integer
 *                 hallId:
 *                   type: integer
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getParishEventById); // Read one

/**
 * @swagger
 * /api/parishEvents/{id}:
 *   put:
 *     summary: Update a parish event by ID
 *     description: This endpoint updates a specific parish event by its ID.
 *     tags:
 *       - Parish Events
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the parish event
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
 *               title:
 *                 type: string
 *                 example: Updated Christmas Celebration
 *               description:
 *                 type: string
 *                 example: An updated grand celebration for Christmas
 *               startDateTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T19:00:00Z"
 *               endDateTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-25T23:00:00Z"
 *               organizerId:
 *                 type: integer
 *                 example: 1
 *               hallId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Event not found
 */
router.put("/:id", updateParishEvent); // Update

/**
 * @swagger
 * /api/parishEvents/{id}:
 *   delete:
 *     summary: Delete a parish event by ID
 *     description: This endpoint deletes a specific parish event by its ID.
 *     tags:
 *       - Parish Events
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the parish event
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
router.delete("/:id", deleteParishEvent); // Delete

export default router;
