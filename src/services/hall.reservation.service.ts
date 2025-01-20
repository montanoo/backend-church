import {
  CreateHallReservation,
  UpdateHallReservation,
} from "../types/hall.reservation.types";
import { prisma } from "../utils/prisma";

export const getAllHallReservations = async () => {
  try {
    return await prisma.hallReservation.findMany();
  } catch (error) {
    console.log(error);
  }
};

export const createHallReservation = async (data: CreateHallReservation) => {
  try {
    return await prisma.hallReservation.create({ data });
  } catch (err) {
    console.log(err);
  }
};

export const getHallReservationById = async (id: number) => {
  try {
    return await prisma.hallReservation.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateHallReservationById = async (
  id: number,
  data: UpdateHallReservation
) => {
  try {
    return await prisma.hallReservation.update({
      where: {
        id,
      },
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHallReservationById = async (id: number) => {
  try {
    return await prisma.hallReservation.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
