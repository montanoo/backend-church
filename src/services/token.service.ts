import { prisma } from "../utils/prisma";

export const createToken = async (data: { token: string; refreshToken: string; isActive: boolean; userId: number }) => {
  return await prisma.token.create({
    data,
  });
};

export const getTokenById = async (id: number) => {
  return await prisma.token.findUnique({
    where: { id },
  });
};

export const getAllTokens = async () => {
  return await prisma.token.findMany();
};

export const updateToken = async (id: number, data: { token?: string; refreshToken?: string; isActive?: boolean }) => {
  return await prisma.token.update({
    where: { id },
    data,
  });
};

export const deleteToken = async (id: number) => {
  return await prisma.token.delete({
    where: { id },
  });
};