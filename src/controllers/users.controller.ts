// src/controllers/parishEventController.ts
import { Request, Response } from "express";
import * as userService from "../services/users.service";

// Create a ParishEvent
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    const newUser = await userService.createUser(
      username,
      email,
      password,
      role
    );

    res.status(201).json(newUser);
  } catch (error: unknown) {  // Typing the error as 'unknown'
    if (error instanceof Error) {  // Check if it's an instance of Error
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Get all ParishEvents
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUser();
    res.status(200).json(users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Get a single ParishEvent
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Update a ParishEvent
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email, password, role } = req.body;

    const updatedUser = await userService.updateUser(
      Number(id),
      username,
      email,
      password,
      role
    );

    res.status(200).json(updatedUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Delete a ParishEvent
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userService.deleteUser(Number(id));

    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};