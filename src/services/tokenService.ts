import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createToken = async (token: string, userId: number) => {
  return await prisma.token.create({
    data: {
      token,
      userId,
      refreshToken: '', // provide a default value or pass the appropriate value
      isActive: true, // provide a default value or pass the appropriate value
    },
  });
};

export const getToken = async (id: number) => {
  return await prisma.token.findUnique({
    where: { id },
  });
};

export const getAllTokens = async () => {
  return await prisma.token.findMany();
};

export const updateToken = async (id: number, token: string) => {
  return await prisma.token.update({
    where: { id },
    data: { token },
  });
};

export const deleteToken = async (id: number) => {
  return await prisma.token.delete({
    where: { id },
  });
};