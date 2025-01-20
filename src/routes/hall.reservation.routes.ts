import { Router } from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
} from "../controllers/hall.reservation.controller";

const router = Router();

/**
 * @swagger
 * /api/hall-reservation:
 *   get:
 *     summary: Get all hall reservations
 *     tags: [Hall Reservations]
 *     responses:
 *       200:
 *         description: A list of hall reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HallReservation'
 *       500:
 *         description: Server error
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/hall-reservation:
 *   post:
 *     summary: Create a new hall reservation
 *     tags: [Hall Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HallReservationInput'
 *     responses:
 *       201:
 *         description: Hall reservation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HallReservation'
 *       500:
 *         description: Server error
 */
router.post("/", create);

/**
 * @swagger
 * /api/hall-reservation/{id}:
 *   get:
 *     summary: Get a specific hall reservation by ID
 *     tags: [Hall Reservations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the hall reservation to retrieve
 *     responses:
 *       200:
 *         description: A specific hall reservation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HallReservation'
 *       404:
 *         description: Hall reservation not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/hall-reservation/{id}:
 *   put:
 *     summary: Update a specific hall reservation by ID
 *     tags: [Hall Reservations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the hall reservation to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HallReservationInput'
 *     responses:
 *       200:
 *         description: Hall reservation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HallReservation'
 *       404:
 *         description: Hall reservation not found
 *       500:
 *         description: Server error
 */
router.put("/:id", updateById);

/**
 * @swagger
 * //api/hall-reservation/{id}:
 *   delete:
 *     summary: Delete a specific hall reservation by ID
 *     tags: [Hall Reservations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the hall reservation to delete
 *     responses:
 *       200:
 *         description: Hall reservation deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       404:
 *         description: Hall reservation not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteById);

export default router;
