import express from "express";
import {
  createRecurringEvent,
  getRecurringEventById,
  getAllRecurringEvents,
  updateRecurringEvent,
  deleteRecurringEvent,
} from "../controllers/recurringEvent.controller";

const router = express.Router();

router.post("/", createRecurringEvent);
router.get("/:id", getRecurringEventById);
router.get("/", getAllRecurringEvents);
router.put("/:id", updateRecurringEvent);
router.delete("/:id", deleteRecurringEvent);

export default router;