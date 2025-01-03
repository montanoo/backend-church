import { Request, Response } from "express";
import {
  createNotification,
  deleteRsvNotification,
  listAll,
  listById,
  updateRsvNotification,
} from "../services/rsv.noti.service";

export const create = async (req: Request, res: Response) => {
  try {
    const { reservationId, notificationType, notificationDate } = req.body;

    const reservationNotification = await createNotification({
      reservationId,
      notificationType,
      notificationDate: new Date(notificationDate),
    });

    return res.status(201).json({ data: reservationNotification });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const allNotifications = await listAll();

    return res.status(200).json({ data: allNotifications });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const reservationById = await listById(Number(id));

    if (!reservationById) {
      return res
        .status(200)
        .json({ data: [], message: "Information not found" });
    }
    return res.status(200).json({ data: reservationById });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const rsvNotificationData = req.body;

    const updatedReservationNotification = await updateRsvNotification(
      Number(id),
      rsvNotificationData
    );

    return res.status(204).json({ data: updatedReservationNotification });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteNoti = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteRsvNotification(Number(id));

    return res.status(204).json({ message: "Deleted succesfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};
