import { prisma } from "../utils/prisma";

export const createHall = async (data: {
  hallName: string;
  capacity?: number;
  parishId: number;
}) => {
  return await prisma.hall.create({
    data,
  });
};

export const getHallById = async (id: number) => {
  return await prisma.hall.findUnique({
    where: { id },
  });
};

export const getAllHalls = async () => {
  return await prisma.hall.findMany();
};

export const updateHall = async (
  id: number,
  data: {
    hallName?: string;
    capacity?: number;
    parishId?: number;
  }
) => {
  return await prisma.hall.update({
    where: { id },
    data,
  });
};

export const deleteHall = async (id: number) => {
  return await prisma.hall.delete({
    where: { id },
  });
};