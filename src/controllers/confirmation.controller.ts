import { Request, Response } from "express";
import * as confirmationService from "../services/confirmation.service";

export const createConfirmation = async (req: Request, res: Response) => {
  try {
    const confirmation = await confirmationService.createConfirmation(req.body);
    res.status(201).json(confirmation);
  } catch (error) {
    console.error("Error creating confirmation:", error);
    res.status(500).json({ message: "Error creating confirmation" });
  }
};

export const getConfirmationById = async (req: Request, res: Response) => {
  try {
    const confirmation = await confirmationService.getConfirmationById(Number(req.params.id));
    if (!confirmation) {
      return res.status(404).json({ message: "Confirmation not found" });
    }
    res.json(confirmation);
  } catch (error) {
    console.error("Error retrieving confirmation:", error);
    res.status(500).json({ message: "Error retrieving confirmation" });
  }
};

export const getAllConfirmations = async (_req: Request, res: Response) => {
  try {
    const confirmations = await confirmationService.getAllConfirmations();
    res.json(confirmations);
  } catch (error) {
    console.error("Error retrieving confirmations:", error);
    res.status(500).json({ message: "Error retrieving confirmations" });
  }
};

export const updateConfirmation = async (req: Request, res: Response) => {
  try {
    const updatedConfirmation = await confirmationService.updateConfirmation(Number(req.params.id), req.body);
    res.json(updatedConfirmation);
  } catch (error) {
    console.error("Error updating confirmation:", error);
    res.status(500).json({ message: "Error updating confirmation" });
  }
};

export const deleteConfirmation = async (req: Request, res: Response) => {
  try {
    await confirmationService.deleteConfirmation(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting confirmation:", error);
    res.status(500).json({ message: "Error deleting confirmation" });
  }
};