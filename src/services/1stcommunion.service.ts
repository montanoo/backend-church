// src/services/parishEventService.ts
import { prisma } from "../utils/prisma";

// Create a ParishEvent
export const createFirstCommunion = async (communionName: string, communionDate: Date, parishId: number, pastorName: string, pastorEmail: string, phoneNumber: string) => {
  try {
    const newEvent = await prisma.firstCommunion.create({
      data: {
        communionName,
        communionDate,
        parishId,
        pastorName,
        pastorEmail,
        phoneNumber,
      },
    });
    return newEvent;
  } catch (error) {
    console.error("Prisma error:", error);  // Log the full error to get more details
    throw new Error("Failed to create FirstCommunion");
  }
};

// Get all ParishEvents
export const getFirstCommunion = async () => {
  try {
    const events = await prisma.firstCommunion.findMany({
      include: { parish: true },
    });
    return events;
  } catch (error) {
    throw new Error("Failed to fetch FirstCommunion");
  }
};

// Get a single ParishEvent by ID
export const getFirstCommunionById = async (id: number) => {
  try {
    const event = await prisma.firstCommunion.findUnique({
      where: { id },
      include: { parish: true },
    });
    return event;
  } catch (error) {
    throw new Error("Failed to fetch FirstCommunion");
  }
};

// Update a ParishEvent
export const updateFirstCommunion = async (id:number, communionName: string, communionDate: Date, parishId: number, pastorName: string, pastorEmail: string, phoneNumber: string) => {
  try {
    const updatedEvent = await prisma.firstCommunion.update({
      where: { id },
      data: {
        communionName,
        communionDate,
        parishId,
        pastorName,
        pastorEmail,
        phoneNumber,
        updatedAt: new Date(),
      },
    });
    return updatedEvent;
  } catch (error) {
    throw new Error("Failed to update FirstCommunion");
  }
};

// Delete a ParishEvent
export const deleteFirstCommunion = async (id: number) => {
  try {
    await prisma.firstCommunion.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Failed to delete FirstCommunion");
  }
};
