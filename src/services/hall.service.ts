//import { response } from "express";
import { prisma } from "../utils/prisma";

export const createHall = async (data: {
  hallName: string;
  capacity?: number;
  parishId: number;
}) => {
  const { hallName, capacity, parishId } = data;
  const response = await prisma.hall.create({
    data: {
      hallName,
      capacity,
      parishId,
    },
  });

  return {
    value: response.id,
    label: response.hallName,
  };
};

export const getHallById = async (id: number) => {
  return await prisma.hall.findUnique({
    where: { id },
  });
};

export const getAllHalls = async () => {
  const halls = await prisma.hall.findMany();
  const response = halls.map((hall) => ({
    value: hall.id,
    label: hall.hallName,
  }));
  return response;
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
