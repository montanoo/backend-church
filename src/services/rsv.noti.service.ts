import {
  CreateReservationNotification,
  UpdateReservationNotification,
} from "../types/reservation.notification.types";
import { prisma } from "../utils/prisma";

export const createNotification = async (
  data: CreateReservationNotification
) => {
  try {
    const reservationNotification = await prisma.reservationNotification.create(
      {
        data,
      }
    );

    return reservationNotification;
  } catch (err) {
    console.log(err);
  }
};

export const listAll = async () => {
  try {
    const allReservationsNotifications =
      await prisma.reservationNotification.findMany({
        include: {
          reservation: {
            include: {
              hall: true,
              user: true,
            },
          },
        },
      });

    return allReservationsNotifications;
  } catch (err) {
    console.log(err);
  }
};

export const listById = async (id: number) => {
  return await prisma.reservationNotification.findFirst({
    where: {
      id,
    },
    include: {
      reservation: {
        include: {
          hall: true,
          user: true,
        },
      },
    },
  });
};

export const updateRsvNotification = async (
  id: number,
  data: UpdateReservationNotification
) => {
  const reservation = await prisma.reservationNotification.update({
    where: {
      id,
    },
    data: data,
  });

  return reservation;
};

export const deleteRsvNotification = async (id: number) => {
  await prisma.reservationNotification.delete({
    where: {
      id,
    },
  });
};
