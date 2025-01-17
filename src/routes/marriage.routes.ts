import express, { Request, Response, Router } from "express";
import marriageController from "../controllers/marriage.controller";

const router: Router = express.Router();

/**
 * @swagger
 * /api/marriages:
 *   get:
 *     summary: Get all marriages
 *     tags:
 *       - Marriages
 *     responses:
 *       200:
 *         description: A list of all marriages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Marriage'
 */
router.get("/", marriageController.getAllMarriages);

/**
 * @swagger
 * /api/marriages/{id}:
 *   get:
 *     summary: Get a marriage by ID
 *     tags:
 *       - Marriages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The marriage with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marriage'
 *       404:
 *         description: Marriage not found
 */
router.get("/:id", marriageController.getMarriageById);

/**
 * @swagger
 * /api/marriages:
 *   post:
 *     summary: Create a new marriage
 *     tags:
 *       - Marriages
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marriage'
 *     responses:
 *       201:
 *         description: Marriage created successfully
 *       400:
 *         description: Invalid request
 */
router.post("/", marriageController.createMarriage);

/**
 * @swagger
 * /api/marriages/{id}:
 *   put:
 *     summary: Update a marriage by ID
 *     tags:
 *       - Marriages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marriage'
 *     responses:
 *       200:
 *         description: Marriage updated successfully
 *       404:
 *         description: Marriage not found
 */
router.put("/:id", marriageController.updateMarriage);

/**
 * @swagger
 * /api/marriages/{id}:
 *   delete:
 *     summary: Delete a marriage by ID
 *     tags:
 *       - Marriages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Marriage deleted successfully
 *       404:
 *         description: Marriage not found
 */
router.delete("/:id", marriageController.deleteMarriage);

export default router;