import { prisma } from "../utils/prisma";

const getAllMarriages = async () => {
  return prisma.marriage.findMany();
};

const getMarriageById = async (id: number) => {
  return prisma.marriage.findUnique({
    where: { id },
  });
};

const createMarriage = async (data: {
  husbandName: string;
  wifeName: string;
  birthDate: Date;
  marriageDate: Date;
  parishId: number;
  diocese?: string;
  delegateName: string;
  godparents?: string;
  pastorName: string;
  pastorEmail: string;
  phoneNumber: string;
}) => {
  return prisma.marriage.create({
    data,
  });
};

const updateMarriage = async (id: number, data: {
    husbandName: string;
    wifeName: string;
    birthDate: Date;
    marriageDate: Date;
    parishId: number;
    diocese?: string;
    delegateName: string;
    godparents?: string;
    pastorName: string;
    pastorEmail: string;
    phoneNumber: string;
}) => {
  return prisma.marriage.update({
    where: { id },
    data,
  });
};

const deleteMarriage = async (id: number) => {
  return prisma.marriage.delete({
    where: { id },
  });
};

export default {    
  getAllMarriages,
  getMarriageById,
  createMarriage,
  updateMarriage,
  deleteMarriage,
};