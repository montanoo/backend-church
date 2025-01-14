import { Request, Response } from "express";
import {
  createHallReservation,
  deleteHallReservationById,
  getAllHallReservations,
  getHallReservationById,
  updateHallReservationById,
} from "../services/hall.reservation.service";

export const getAll = async (request: Request, response: Response) => {
  try {
    const data = await getAllHallReservations();
    return response.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const create = async (request: Request, response: Response) => {
  try {
    const { hallId, userId, startDateTime, endDateTime, rentalContract } =
      request.body;

    const data = await createHallReservation({
      hallId,
      userId,
      startDateTime,
      endDateTime,
      rentalContract,
    });

    return response.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const data = await getHallReservationById(Number(id));

    return response.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const updateData = request.body;

    const data = await updateHallReservationById(Number(id), updateData);

    return response.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const data = await deleteHallReservationById(Number(id));

    return response.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};
