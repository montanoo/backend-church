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
 *       - first communions
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
 *         description: Communion created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createFirstCommunion); // Create

/**
 * @swagger
 * /api/first-communion:
 *   get:
 *     summary: Get all first communions
 *     description: This endpoint retrieves all first communions.
 *     tags:
 *       - first communions
 *     responses:
 *       200:
 *         description: A list of first communions
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
router.get("/", getFirstCommunion); // Read all

/**
 * @swagger
 * /api/first-communion/{id}:
 *   get:
 *     summary: Get a first communion by ID
 *     description: This endpoint retrieves a specific first communion by its ID.
 *     tags:
 *       - first communions
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
 *       - first communions
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
 *       - first communions
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
