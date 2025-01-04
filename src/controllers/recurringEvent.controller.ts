import { Request, Response } from "express";
import * as recurringEventService from "../services/recurringEvent.service";

export const createRecurringEvent = async (req: Request, res: Response) => {
  try {
    const recurringEvent = await recurringEventService.createRecurringEvent(req.body);
    res.status(201).json(recurringEvent);
  } catch (error) {
    console.error("Error creating recurring event:", error);
    res.status(500).json({ message: "Error creating recurring event" });
  }
};

export const getRecurringEventById = async (req: Request, res: Response) => {
  try {
    const recurringEvent = await recurringEventService.getRecurringEventById(Number(req.params.id));
    if (!recurringEvent) {
      return res.status(404).json({ message: "Recurring event not found" });
    }
    res.json(recurringEvent);
  } catch (error) {
    console.error("Error retrieving recurring event:", error);
    res.status(500).json({ message: "Error retrieving recurring event" });
  }
};

export const getAllRecurringEvents = async (_req: Request, res: Response) => {
  try {
    const recurringEvents = await recurringEventService.getAllRecurringEvents();
    res.json(recurringEvents);
  } catch (error) {
    console.error("Error retrieving recurring events:", error);
    res.status(500).json({ message: "Error retrieving recurring events" });
  }
};

export const updateRecurringEvent = async (req: Request, res: Response) => {
  try {
    const updatedRecurringEvent = await recurringEventService.updateRecurringEvent(Number(req.params.id), req.body);
    res.json(updatedRecurringEvent);
  } catch (error) {
    console.error("Error updating recurring event:", error);
    res.status(500).json({ message: "Error updating recurring event" });
  }
};

export const deleteRecurringEvent = async (req: Request, res: Response) => {
  try {
    await recurringEventService.deleteRecurringEvent(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting recurring event:", error);
    res.status(500).json({ message: "Error deleting recurring event" });
  }
};