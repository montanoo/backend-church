import { prisma } from "../utils/prisma";

export const createRecurringEvent = async (data: {
  recurringTitle: string;
  recurringDescription: string;
  dayOfWeek: string;
  startTime: Date;
  endTime: Date;
  organizerId: number;
  hallId: number;
}) => {
  return await prisma.recurringEvent.create({
    data,
  });
};

export const getRecurringEventById = async (id: number) => {
  return await prisma.recurringEvent.findUnique({
    where: { id },
  });
};

export const getAllRecurringEvents = async () => {
  return await prisma.recurringEvent.findMany();
};

export const updateRecurringEvent = async (
  id: number,
  data: {
    recurringTitle?: string;
    recurringDescription?: string;
    dayOfWeek?: string;
    startTime?: Date;
    endTime?: Date;
    organizerId?: number;
    hallId?: number;
  }
) => {
  return await prisma.recurringEvent.update({
    where: { id },
    data,
  });
};

export const deleteRecurringEvent = async (id: number) => {
  return await prisma.recurringEvent.delete({
    where: { id },
  });
};