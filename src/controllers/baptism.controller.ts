import { Request, Response } from "express";
import baptismService from "../services/baptism.service";

const createBaptism = async (req: Request, res: Response): Promise<Response> => {
    try {
      const baptism = await baptismService.createBaptism(req.body);
      return res.status(201).json(baptism);
    } catch (error) {
      console.error("Error creating baptism:", error);
      return res.status(400).json({ message: "Failed to create baptism", error });
    }
  };

const getAllBaptisms = async (req: Request, res: Response): Promise<Response> => {
    try {
      const baptisms = await baptismService.getAllBaptisms();
      return res.status(200).json(baptisms);
    } catch (error) {
      console.error("Error retrieving baptisms:", error);
      return res.status(500).json({ message: "Failed to retrieve baptisms", error });
    }
  };

const getBaptismById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const baptism = await baptismService.getBaptismById(parseInt(id));
  
      if (!baptism) {
        return res.status(404).json({ message: "Baptism record not found" });
      }
  
      return res.status(200).json(baptism);
    } catch (error) {
      console.error("Error retrieving baptism:", error);
      return res.status(500).json({ message: "Failed to retrieve baptism", error });
    }
  };

const updateBaptism = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const updatedBaptism = await baptismService.updateBaptism(parseInt(id), req.body);
  
      if (!updatedBaptism) {
        return res.status(404).json({ message: "Baptism record not found" });
      }
  
      return res.status(200).json(updatedBaptism);
    } catch (error) {
      console.error("Error updating baptism:", error);
      return res.status(500).json({ message: "Failed to update baptism", error });
    }
  };

const deleteBaptism = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const deleted = await baptismService.deleteBaptism(parseInt(id));
  
      if (!deleted) {
        return res.status(404).json({ message: "Baptism record not found" });
      }
  
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting baptism:", error);
      return res.status(500).json({ message: "Failed to delete baptism", error });
    }
  };

export default {
    createBaptism,
    getAllBaptisms,
    getBaptismById,
    updateBaptism,
    deleteBaptism,
  };