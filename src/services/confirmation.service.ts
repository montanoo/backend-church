import { prisma } from "../utils/prisma";

export const createConfirmation = async (data: {
  confirmedName: string;
  confirmationDate: Date;
  parishId: number;
  book: string;
  folio: string;
  diocese?: string;
  bishopName: string;
  age: number;
  motherName?: string;
  fatherName?: string;
  godparents?: string;
  pastorName: string;
  pastorEmail: string;
  phoneNumber: string;
}) => {
  return await prisma.confirmation.create({
    data,
  });
};

export const getConfirmationById = async (id: number) => {
  return await prisma.confirmation.findUnique({
    where: { id },
  });
};

export const getAllConfirmations = async () => {
  return await prisma.confirmation.findMany();
};

export const updateConfirmation = async (
  id: number,
  data: {
    confirmedName?: string;
    confirmationDate?: Date;
    parishId?: number;
    book?: string;
    folio?: string;
    diocese?: string;
    bishopName?: string;
    age?: number;
    motherName?: string;
    fatherName?: string;
    godparents?: string;
    pastorName?: string;
    pastorEmail?: string;
    phoneNumber?: string;
  }
) => {
  return await prisma.confirmation.update({
    where: { id },
    data,
  });
};

export const deleteConfirmation = async (id: number) => {
  return await prisma.confirmation.delete({
    where: { id },
  });
};