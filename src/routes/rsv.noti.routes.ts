import express from "express";
import {
  create,
  deleteNoti,
  getAll,
  getById,
  update,
} from "../controllers/rsv.noti.controller";

const router = express.Router();

/**
 * @swagger
 * /api/reservation-notifications:
 *   post:
 *     summary: Create a new reservation notification
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reservationId:
 *                 type: integer
 *                 description: ID of the reservation
 *                 example: 1
 *               notificationType:
 *                 type: string
 *                 description: Type of notification
 *                 example: "Reminder"
 *               notificationDate:
 *                 type: string
 *                 format: date-time
 *                 description: Date and time of the notification
 *                 example: "2025-01-02T10:00:00Z"
 *     responses:
 *       201:
 *         description: Notification created successfully
 *       500:
 *         description: Server error
 */
router.post("/", create);

/**
 * @swagger
 * /api/reservation-notifications:
 *   get:
 *     summary: Get all notifications
 *     tags:
 *       - Notifications
 *     responses:
 *       200:
 *         description: List of all notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notification'
 *       500:
 *         description: Server error
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/reservation-notifications/{id}:
 *   get:
 *     summary: Get notification by ID
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the notification
 *     responses:
 *       200:
 *         description: Notification details
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/reservation-notifications/{id}:
 *   put:
 *     summary: Update a reservation notification
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the notification to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notificationType:
 *                 type: string
 *                 description: New type of notification
 *               notificationDate:
 *                 type: string
 *                 format: date-time
 *                 description: New date and time for the notification
 *     responses:
 *       204:
 *         description: Notification updated successfully
 *       500:
 *         description: Server error
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/reservation-notifications/{id}:
 *   delete:
 *     summary: Delete a reservation notification
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the notification to delete
 *     responses:
 *       204:
 *         description: Notification deleted successfully
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteNoti);

export default router;
