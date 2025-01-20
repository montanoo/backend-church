import { Request, Response } from "express";
import * as firstcommunionService from "../services/1stcommunion.service";

// Create a First communion
export const createFirstCommunion = async (req: Request, res: Response) => {
  try {
    const { communionName, communionDate, parishId, pastorName, pastorEmail, phoneNumber} = req.body;

    const newEvent = await firstcommunionService.createFirstCommunion(
        communionName,
        new Date(communionDate),
        parishId,
        pastorName,
        pastorEmail,
        phoneNumber,
    );

    res.status(201).json(newEvent);
  } catch (error: unknown) {  // Typing the error as 'unknown'
    if (error instanceof Error) {  // Check if it's an instance of Error
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Get all communions
export const getFirstCommunion = async (req: Request, res: Response) => {
  try {
    const events = await firstcommunionService.getFirstCommunion();
    res.status(200).json(events);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Get a single communion
export const getFirstCommunionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await firstcommunionService.getFirstCommunionById(Number(id));

    if (!event) {
      return res.status(404).json({ error: "FirstCommunion not found" });
    }

    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Update a communion
export const updateFirstCommunion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { communionName, communionDate, parishId, pastorName, pastorEmail, phoneNumber } = req.body;

    const updatedEvent = await firstcommunionService.updateFirstCommunion(
      Number(id),
      communionName,
      new Date(communionDate),
      parishId,
      pastorName,
      pastorEmail,
      phoneNumber,
    );

    res.status(200).json(updatedEvent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

//Delete first communion
export const deleteFirstCommunion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await firstcommunionService.deleteFirstCommunion(Number(id));

    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};
