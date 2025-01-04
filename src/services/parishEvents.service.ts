// src/services/parishEventService.ts
import { prisma } from "../utils/prisma";

// Create a ParishEvent
export const createParishEvent = async (title: string, description: string, startDateTime: Date, endDateTime: Date, organizerId: number, hallId: number) => {
  try {
    const newEvent = await prisma.parishEvent.create({
      data: {
        title,
        description,
        startDateTime,
        endDateTime,
        organizerId,
        hallId,
      },
    });
    return newEvent;
  } catch (error) {
    console.error("Prisma error:", error);  // Log the full error to get more details
    throw new Error("Failed to create ParishEvent");
  }
};

// Get all ParishEvents
export const getParishEvents = async () => {
  try {
    const events = await prisma.parishEvent.findMany({
      include: { organizer: true, hall: true },
    });
    return events;
  } catch (error) {
    throw new Error("Failed to fetch ParishEvents");
  }
};

// Get a single ParishEvent by ID
export const getParishEventById = async (id: number) => {
  try {
    const event = await prisma.parishEvent.findUnique({
      where: { id },
      include: { organizer: true, hall: true },
    });
    return event;
  } catch (error) {
    throw new Error("Failed to fetch ParishEvent");
  }
};

// Update a ParishEvent
export const updateParishEvent = async (id: number, title: string, description: string, startDateTime: Date, endDateTime: Date, organizerId: number, hallId: number) => {
  try {
    const updatedEvent = await prisma.parishEvent.update({
      where: { id },
      data: {
        title,
        description,
        startDateTime,
        endDateTime,
        organizerId,
        hallId,
        updatedAt: new Date(),
      },
    });
    return updatedEvent;
  } catch (error) {
    throw new Error("Failed to update ParishEvent");
  }
};

// Delete a ParishEvent
export const deleteParishEvent = async (id: number) => {
  try {
    await prisma.parishEvent.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Failed to delete ParishEvent");
  }
};
