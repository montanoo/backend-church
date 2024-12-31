import { Request, Response } from "express";
import parishService from "../services/parish.service";

export const createParish = async (req: Request, res: Response) => {
  const { parishName, parishLocation } = req.body;

  try {
    const parish = await parishService.createParish({ parishName, parishLocation });
    res.status(201).json(parish);
  } catch (error) {
    console.error("Error creating parish:", error);
    res.status(500).json({ message: "Error creating parish" });
  }
};

export const getParishById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const parish = await parishService.getParishById(Number(id));
    if (!parish) {
      return res.status(404).json({ message: "Parish not found" });
    }
    res.json(parish);
  } catch (error) {
    console.error("Error retrieving parish:", error);
    res.status(500).json({ message: "Error retrieving parish" });
  }
};

export const getAllParishes = async (_req: Request, res: Response) => {
  try {
    const parishes = await parishService.getAllParishes();
    res.json(parishes);
  } catch (error) {
    console.error("Error retrieving parishes:", error);
    res.status(500).json({ message: "Error retrieving parishes" });
  }
};

export const updateParish = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parishData = req.body;

  try {
    const updatedParish = await parishService.updateParish(Number(id), parishData);
    res.json(updatedParish);
  } catch (error) {
    console.error("Error updating parish:", error);
    res.status(500).json({ message: "Error updating parish" });
  }
};

export const deleteParish = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await parishService.deleteParish(Number(id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting parish:", error);
    res.status(500).json({ message: "Error deleting parish" });
  }
};
