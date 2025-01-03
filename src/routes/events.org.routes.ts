import express from 'express';
import {
  create,
  getAll,
  getById,
  update,
  deleteEventOrgById,
} from '../controllers/events.org.controller';

const router = express.Router();

/**
 * @swagger
 * /api/event-organizers:
 *   post:
 *     summary: Create a new event organizer
 *     tags:
 *       - Event Organizers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the organizer
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: Email of the organizer
 *                 example: "john.doe@example.com"
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number of the organizer
 *                 example: "+1234567890"
 *     responses:
 *       201:
 *         description: Event organizer created successfully
 *       500:
 *         description: Server error
 */
router.post('/', create);

/**
 * @swagger
 * /api/event-organizers:
 *   get:
 *     summary: Get all event organizers
 *     tags:
 *       - Event Organizers
 *     responses:
 *       200:
 *         description: List of all event organizers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EventOrganizer'
 *       500:
 *         description: Server error
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/event-organizers/{id}:
 *   get:
 *     summary: Get event organizer by ID
 *     tags:
 *       - Event Organizers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the event organizer
 *     responses:
 *       200:
 *         description: Event organizer details
 *       404:
 *         description: Organizer not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getById);

/**
 * @swagger
 * /api/event-organizers/{id}:
 *   put:
 *     summary: Update an event organizer
 *     tags:
 *       - Event Organizers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the event organizer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name
 *               email:
 *                 type: string
 *                 description: Updated email
 *               phoneNumber:
 *                 type: string
 *                 description: Updated phone number
 *     responses:
 *       204:
 *         description: Event organizer updated successfully
 *       500:
 *         description: Server error
 */
router.put('/:id', update);

/**
 * @swagger
 * /api/event-organizers/{id}:
 *   delete:
 *     summary: Delete an event organizer
 *     tags:
 *       - Event Organizers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the event organizer to delete
 *     responses:
 *       204:
 *         description: Event organizer deleted successfully
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteEventOrgById);

export default router;
