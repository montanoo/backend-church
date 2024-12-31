import express, { Request, Response, Router } from "express";
import loginRouter from "./auth.routes"; 
import parishRouter from "./parish.routes";

const router: Router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Validates the health of our system
 *     responses:
 *       200:
 *         description: A message that validates if our system is up
 */
router.get("/health", (req: Request, res: Response) => {
  res.status(200).send("health ok.");
});

// Manages Login route
router.use("/auth", loginRouter);
// Manages Parish crud route
router.use("/parishes", parishRouter);

export default router;