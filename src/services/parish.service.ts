import { prisma } from "../utils/prisma";

const createParish = async (parishData: { parishName: string; parishLocation: string }) => {
  return await prisma.parishes.create({
    data: parishData,
  });
};

const getParishById = async (id: number) => {
  return await prisma.parishes.findUnique({
    where: { id },
  });
};

const getAllParishes = async () => {
  return await prisma.parishes.findMany();
};

const updateParish = async (id: number, parishData: { parishName?: string; parishLocation?: string }) => {
  return await prisma.parishes.update({
    where: { id },
    data: parishData,
  });
};

const deleteParish = async (id: number) => {
  return await prisma.parishes.delete({
    where: { id },
  });
};

export default {
  createParish,
  getParishById,
  getAllParishes,
  updateParish,
  deleteParish,
};
