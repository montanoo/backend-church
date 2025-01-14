import express, { Request, Response, Router } from "express";
import loginRouter from "./auth.routes";
import parishRouter from "./parish.routes";
import reservationNotificationRouter from "./rsv.noti.routes";
import eventOrganizerRouter from "./events.org.routes";
import recurringEventRouter from "./recurringEvent.routes";
import tokenRouter from "./token.routes";
import parishEventRoutes from "./parishEvent.routes";
import marriageRoutes from "./marriage.routes";
import userRouter from "./users.routes";
import confirmationRouter from "./confirmation.routes";

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

router.use("/reservation-notifications", reservationNotificationRouter);

router.use("/event-organizers", eventOrganizerRouter);

router.use("/recurring-events", recurringEventRouter);

router.use("/tokens", tokenRouter);

router.use("/parish-events", parishEventRoutes);

router.use("/marriages", marriageRoutes);

router.use("/users", userRouter);

router.use("/confirmations", confirmationRouter);

export default router;
