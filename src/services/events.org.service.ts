import { UpdateEventsOrganizer} from '../types/events.organizer.types';
import {prisma} from '../utils/prisma';

export const createEventsOrganizer = async (data: {
      name: string;
      email: string;
      phoneNumber: string;
  }) => {
    const { name, email, phoneNumber } = data;
    const response = await prisma.eventOrganizer.create({
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    return {
      value: response.id,
      label: response.name,
    };
};

export const listAll = async () => {
    const allEventsOrganizers = await prisma.eventOrganizer.findMany();

    const response = allEventsOrganizers.map((eventsOrganizer) => ({
      value: eventsOrganizer.id,
      label: eventsOrganizer.name,
    }));

    return response;
};

export const listById = async (id: number) => {
  return await prisma.eventOrganizer.findFirst({
    where: {
      id,
    },
  });
};

export const updateEventsOrganizer = async (
    id: number,
    data: UpdateEventsOrganizer
    ) => {
        const updatedEventsOrganizer = await prisma.eventOrganizer.update({
        where: {
            id,
        },
        data: data,
        });
    
        return updatedEventsOrganizer;
    };

export const deleteEventsOrganizer = async (id: number) => {
    await prisma.eventOrganizer.delete({
        where: {
        id,
        },
    });
    };