import { prisma } from "../utils/prisma";

const createBaptism = async (data: {
    baptizedName: string;
    birthDate: Date;
    baptismDate: Date;
    parishId: number;
    book: string;
    folio: string;
    birthPlace: string;
    motherName?: string;
    fatherName?: string;
    godparents?: string;
    ministerName: string;
    marginNotes?: string;
    pastorName: string;
    pastorEmail: string;
    phoneNumber: string;
  }) => {
    return prisma.baptism.create({
      data,
    });
  };

const getBaptismById = async (id: number) => {
return prisma.baptism.findUnique({
    where: { id },
    });
};

const getAllBaptisms = async () => {
    return prisma.baptism.findMany();
  };

  const updateBaptism = async (id: number, data: {
    baptizedName?: string;
    birthDate?: Date;
    baptismDate?: Date;
    parishId?: number;
    book?: string;
    folio?: string;
    birthPlace?: string;
    motherName?: string;
    fatherName?: string;
    godparents?: string;
    ministerName?: string;
    marginNotes?: string;
    pastorName?: string;
    pastorEmail?: string;
    phoneNumber?: string;
  }) => {
    return prisma.baptism.update({
      where: { id },
      data,
    });
  };

  const deleteBaptism = async (id: number) => {
    return prisma.baptism.delete({
      where: { id },
    });
  };

  export default {
    createBaptism,
    getAllBaptisms,
    getBaptismById,
    updateBaptism,
    deleteBaptism,
  };