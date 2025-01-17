import { Request, Response } from "express";
import marriageService from "../services/marriage.service";

const createMarriage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const marriage = await marriageService.createMarriage(req.body);
    return res.status(201).json(marriage);
  } catch (error) {
    console.error("Error creating marriage:", error);
    return res.status(400).json({ message: "Failed to create marriage", error });
  }
};

const getAllMarriages = async (req: Request, res: Response): Promise<Response> => {
  try {
    const marriages = await marriageService.getAllMarriages();
    return res.status(200).json(marriages);
  } catch (error) {
    console.error("Error retrieving marriages:", error);
    return res.status(500).json({ message: "Failed to retrieve marriages", error });
  }
};

const getMarriageById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const marriage = await marriageService.getMarriageById(parseInt(id));

    if (!marriage) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(200).json(marriage);
  } catch (error) {
    console.error("Error retrieving marriage:", error);
    return res.status(500).json({ message: "Failed to retrieve marriage", error });
  }
};

const updateMarriage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedMarriage = await marriageService.updateMarriage(parseInt(id), req.body);

    if (!updatedMarriage) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(200).json(updatedMarriage);
  } catch (error) {
    console.error("Error updating marriage:", error);
    return res.status(500).json({ message: "Failed to update marriage", error });
  }
};

const deleteMarriage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleted = await marriageService.deleteMarriage(parseInt(id));

    if (!deleted) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting marriage:", error);
    return res.status(500).json({ message: "Failed to delete marriage", error });
  }
};

export default {
  createMarriage,
  getAllMarriages,
  getMarriageById,
  updateMarriage,
  deleteMarriage,
};