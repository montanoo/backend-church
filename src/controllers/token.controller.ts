import { Request, Response } from "express";
import * as tokenService from "../services/token.service";

export const createToken = async (req: Request, res: Response) => {
  try {
    const token = await tokenService.createToken(req.body);
    res.status(201).json(token);
  } catch (error) {
    console.error("Error creating token:", error);
    res.status(500).json({ message: "Error creating token" });
  }
};

export const getTokenById = async (req: Request, res: Response) => {
  try {
    const token = await tokenService.getTokenById(Number(req.params.id));
    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }
    res.json(token);
  } catch (error) {
    console.error("Error retrieving token:", error);
    res.status(500).json({ message: "Error retrieving token" });
  }
};

export const getAllTokens = async (_req: Request, res: Response) => {
  try {
    const tokens = await tokenService.getAllTokens();
    res.json(tokens);
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).json({ message: "Error retrieving tokens" });
  }
};

export const updateToken = async (req: Request, res: Response) => {
  try {
    const updatedToken = await tokenService.updateToken(Number(req.params.id), req.body);
    res.json(updatedToken);
  } catch (error) {
    console.error("Error updating token:", error);
    res.status(500).json({ message: "Error updating token" });
  }
};

export const deleteToken = async (req: Request, res: Response) => {
  try {
    await tokenService.deleteToken(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting token:", error);
    res.status(500).json({ message: "Error deleting token" });
  }
};