// src/controllers/parishEventController.ts
import { Request, Response } from "express";
import * as parishEventService from "../services/parishEvents.service";

// Create a ParishEvent
export const createParishEvent = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      startDateTime,
      endDateTime,
      organizerId,
      hallId,
    } = req.body;

    const newEvent = await parishEventService.createParishEvent(
      title,
      description,
      new Date(startDateTime),
      new Date(endDateTime),
      organizerId,
      hallId
    );

    res.status(201).json(newEvent);
  } catch (error: unknown) {
    // Typing the error as 'unknown'
    if (error instanceof Error) {
      // Check if it's an instance of Error
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

// Get all ParishEvents
export const getParishEvents = async (req: Request, res: Response) => {
  try {
    const events = await parishEventService.getParishEvents();
    const transformedEvents = events.map((event) => ({
      ...event,
      start: event.startDateTime,
      end: event.endDateTime,
      startDateTime: undefined,
      endDateTime: undefined,
    }));

    res.status(200).json(transformedEvents);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

// Get a single ParishEvent
export const getParishEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await parishEventService.getParishEventById(Number(id));

    if (!event) {
      return res.status(404).json({ error: "ParishEvent not found" });
    }

    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

// Update a ParishEvent
export const updateParishEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      startDateTime,
      endDateTime,
      organizerId,
      hallId,
    } = req.body;

    const updatedEvent = await parishEventService.updateParishEvent(
      Number(id),
      title,
      description,
      new Date(startDateTime),
      new Date(endDateTime),
      organizerId,
      hallId
    );

    res.status(200).json(updatedEvent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

// Delete a ParishEvent
export const deleteParishEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await parishEventService.deleteParishEvent(Number(id));

    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};
