import express from "express";
import {
    createFirstCommunion,
    getFirstCommunion,
    getFirstCommunionById,
    updateFirstCommunion,
    deleteFirstCommunion,
} from "../controllers/1stcommunion.controller";

const router = express.Router();

/**
 * @swagger
 * /api/first-communion:
 *   post:
 *     summary: Create a new first communion
 *     description: This endpoint is used to create a new first communion.
 *     tags:
 *       - First communions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the event
 *                     example: 1
 *                   communionName:
 *                     type: string
 *                     description: Name of the First Communion event
 *                     example: "Spring First Communion Celebration"
 *                   communionDate:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of the event in ISO 8601 format
 *                     example: "2024-03-15T10:00:00Z"
 *                   parishId:
 *                     type: integer
 *                     description: Identifier for the parish hosting the event
 *                     example: 101
 *                   pastorName:
 *                     type: string
 *                     description: Name of the pastor presiding over the event
 *                     example: "Father John Doe"
 *                   pastorEmail:
 *                     type: string
 *                     description: Email address of the pastor
 *                     example: "john.doe@example.com"
 *                   phoneNumber:
 *                     type: string
 *                     description: Contact phone number for inquiries
 *                     example: "+1-234-567-8900"
 *     responses:
 *       201:
 *         description: Communion created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createFirstCommunion); // Create

/**
 * @swagger
 * /api/first-communion:
 *   get:
 *     summary: Retrieve all First Communion events
 *     description: Fetches a list of all First Communion events, including details about each event such as its name, date, parish, and pastor information.
 *     tags:
 *       - First communions
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of First Communion events.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the event
 *                     example: 1
 *                   communionName:
 *                     type: string
 *                     description: Name of the First Communion event
 *                     example: "Spring First Communion Celebration"
 *                   communionDate:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of the event in ISO 8601 format
 *                     example: "2024-03-15T10:00:00Z"
 *                   parishId:
 *                     type: integer
 *                     description: Identifier for the parish hosting the event
 *                     example: 101
 *                   pastorName:
 *                     type: string
 *                     description: Name of the pastor presiding over the event
 *                     example: "Father John Doe"
 *                   pastorEmail:
 *                     type: string
 *                     description: Email address of the pastor
 *                     example: "john.doe@example.com"
 *                   phoneNumber:
 *                     type: string
 *                     description: Contact phone number for inquiries
 *                     example: "+1-234-567-8900"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "An unexpected error occurred while retrieving First Communion events."
 */
router.get("/", getFirstCommunion); // Read all

/**
 * @swagger
 * /api/first-communion/{id}:
 *   get:
 *     summary: Get a first communion by ID
 *     description: This endpoint retrieves a specific first communion by its ID.
 *     tags:
 *       - First communions
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the first communion
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The details of the first communion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the event
 *                     example: 1
 *                   communionName:
 *                     type: string
 *                     description: Name of the First Communion event
 *                     example: "Spring First Communion Celebration"
 *                   communionDate:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of the event in ISO 8601 format
 *                     example: "2024-03-15T10:00:00Z"
 *                   parishId:
 *                     type: integer
 *                     description: Identifier for the parish hosting the event
 *                     example: 101
 *                   pastorName:
 *                     type: string
 *                     description: Name of the pastor presiding over the event
 *                     example: "Father John Doe"
 *                   pastorEmail:
 *                     type: string
 *                     description: Email address of the pastor
 *                     example: "john.doe@example.com"
 *                   phoneNumber:
 *                     type: string
 *                     description: Contact phone number for inquiries
 *                     example: "+1-234-567-8900"
 *       404:
 *         description: Communion not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getFirstCommunionById); // Read one

/**
 * @swagger
 * /api/first-communion/{id}:
 *   put:
 *     summary: Update a first communion by ID
 *     description: This endpoint updates a specific first communion by its ID.
 *     tags:
 *       - First communions
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the first communion
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
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the event
 *                     example: 1
 *                   communionName:
 *                     type: string
 *                     description: Name of the First Communion event
 *                     example: "Spring First Communion Celebration"
 *                   communionDate:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of the event in ISO 8601 format
 *                     example: "2024-03-15T10:00:00Z"
 *                   parishId:
 *                     type: integer
 *                     description: Identifier for the parish hosting the event
 *                     example: 101
 *                   pastorName:
 *                     type: string
 *                     description: Name of the pastor presiding over the event
 *                     example: "Father John Doe"
 *                   pastorEmail:
 *                     type: string
 *                     description: Email address of the pastor
 *                     example: "john.doe@example.com"
 *                   phoneNumber:
 *                     type: string
 *                     description: Contact phone number for inquiries
 *                     example: "+1-234-567-8900"
 *                   updatedAt:
 *                    type: string
 *                    format: date-time
 *                    description: Date and time when the event was last updated
 *                   example: "2024-03-15T10:00:00Z"
 *     responses:
 *       200:
 *         description: Communion updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Communion not found
 */
router.put("/:id", updateFirstCommunion); // Update

/**
 * @swagger
 * /api/first-communion/{id}:
 *   delete:
 *     summary: Delete a first communion by ID
 *     description: This endpoint deletes a specific first communion by its ID.
 *     tags:
 *       - First communions
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the first communion
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Communion deleted successfully
 *       404:
 *         description: Communion not found
 */
router.delete("/:id", deleteFirstCommunion); // Delete

export default router;
