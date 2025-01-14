import { Request, Response } from "express";
import * as hallService from "../services/hall.service";

export const createHall = async (req: Request, res: Response) => {
  try {
    const hall = await hallService.createHall(req.body);
    res.status(201).json(hall);
  } catch (error) {
    console.error("Error creating hall:", error);
    res.status(500).json({ message: "Error creating hall" });
  }
};

export const getHallById = async (req: Request, res: Response) => {
  try {
    const hall = await hallService.getHallById(Number(req.params.id));
    if (!hall) {
      return res.status(404).json({ message: "Hall not found" });
    }
    res.json(hall);
  } catch (error) {
    console.error("Error retrieving hall:", error);
    res.status(500).json({ message: "Error retrieving hall" });
  }
};

export const getAllHalls = async (_req: Request, res: Response) => {
  try {
    const halls = await hallService.getAllHalls();
    res.json(halls);
  } catch (error) {
    console.error("Error retrieving halls:", error);
    res.status(500).json({ message: "Error retrieving halls" });
  }
};

export const updateHall = async (req: Request, res: Response) => {
  try {
    const updatedHall = await hallService.updateHall(Number(req.params.id), req.body);
    res.json(updatedHall);
  } catch (error) {
    console.error("Error updating hall:", error);
    res.status(500).json({ message: "Error updating hall" });
  }
};

export const deleteHall = async (req: Request, res: Response) => {
  try {
    await hallService.deleteHall(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting hall:", error);
    res.status(500).json({ message: "Error deleting hall" });
  }
};