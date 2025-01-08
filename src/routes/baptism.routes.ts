import express from "express";
import baptismController from "../controllers/baptism.controller";

const router = express.Router();

/**
 * @swagger
 * /api/baptisms:
 *   post:
 *     summary: Create a new baptism
 *     tags:
 *       - Baptisms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Baptism'
 *     responses:
 *       201:
 *         description: Baptism created successfully
 *       400:
 *         description: Invalid request
 */
router.post("/", baptismController.createBaptism);

/**
 * @swagger
 * /api/baptisms:
 *   get:
 *     summary: Get all baptisms
 *     tags:
 *       - Baptisms
 *     responses:
 *       200:
 *         description: A list of all baptisms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Baptism'
 */
router.get("/", baptismController.getAllBaptisms);

/**
 * @swagger
 * /api/baptisms/{id}:
 *   get:
 *     summary: Get a baptism by ID
 *     tags:
 *       - Baptisms
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The baptism with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Baptism'
 *       404:
 *         description: Baptism not found
 */
router.get("/:id", baptismController.getBaptismById);

/**
 * @swagger
 * /api/baptisms/{id}:
 *   put:
 *     summary: Update a baptism by ID
 *     tags:
 *       - Baptisms
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
 *             $ref: '#/components/schemas/Baptism'
 *     responses:
 *       200:
 *         description: Baptism updated successfully
 *       404:
 *         description: Baptism not found
 */
router.put("/:id", baptismController.updateBaptism);

/**
 * @swagger
 * /api/baptisms/{id}:
 *   delete:
 *     summary: Delete a baptism by ID
 *     tags:
 *       - Baptisms
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Baptism deleted successfully
 *       404:
 *         description: Baptism not found
 */
router.delete("/:id", baptismController.deleteBaptism);

export default router;