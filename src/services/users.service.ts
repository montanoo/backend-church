// src/services/parishEventService.ts
import { prisma } from "../utils/prisma";

// Create a ParishEvent
export const createUser = async (username: string, email: string, password: string, role: string) => {
  try {
    const newEvent = await prisma.user.create({
      data: {
        username,
        email,
        password,
        role
      },
    });
    return newEvent;
  } catch (error) {
    console.error("Prisma error:", error);  // Log the full error to get more details
    throw new Error("Failed to create User");
  }
};

// Get all ParishEvents
export const getUser = async () => {
  try {
    const events = await prisma.user.findMany({
      include: { HallReservations: true, Tokens: true },
    });
    return events;
  } catch (error) {
    throw new Error("Failed to fetch User");
  }
};

// Get a single ParishEvent by ID
export const getUserById = async (id: number) => {
  try {
    const event = await prisma.user.findUnique({
      where: { id },
      include: { HallReservations: true, Tokens: true },
    });
    return event;
  } catch (error) {
    throw new Error("Failed to fetch User");
  }
};

// Update a ParishEvent
export const updateUser = async (id: number, username: string, email: string, password: string, role: string) => {
  try {
    const updatedEvent = await prisma.user.update({
      where: { id },
      data: {
        username,
        email,
        password,
        role,
        updatedAt: new Date(),
      },
    });
    return updatedEvent;
  } catch (error) {
    throw new Error("Failed to update User");
  }
};

// Delete a ParishEvent
export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Failed to delete User");
  }
};
