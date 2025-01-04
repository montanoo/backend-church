import {CreateEventsOrganizer, UpdateEventsOrganizer,    
} from '../types/events.organizer.types';
import {prisma} from '../utils/prisma';

export const createEventsOrganizer = async (
    data: CreateEventsOrganizer) => {
  try {
    const eventsOrganizer = await prisma.eventOrganizer.create(
        {
            data,
        }
    );

    return eventsOrganizer;
  } catch (err) {
    console.log(err);
  }
};

export const listAll = async () => {
  try {
    const allEventsOrganizers = 
    await prisma.eventOrganizer.findMany();

    return allEventsOrganizers;
  } catch (err) {
    console.log(err);
  }
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