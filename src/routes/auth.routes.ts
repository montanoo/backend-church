import express from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     description: This endpoint allows a user to log in by providing their username and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "user123"
 *               password:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in"
 *       400:
 *         description: Invalid credentials or something went wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials"
 *                 error:
 *                   type: string
 *                   example: "Something went wrong"
 */
router.post("/login", authController.login);

/*
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout a user
 *     description: This endpoint allows a user to log out by clearing their session.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successful logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged out"
 */
router.post("/logout", authController.logout);

export default router;
