import {Request, Response} from 'express';
import * as eventOrgService from '../services/events.org.service';

export const create = async (req: Request, res: Response) => {
  try {
    const eventOrganizer = await eventOrgService.createEventsOrganizer(req.body);
    res.status(201).json(eventOrganizer);
    //return res.status(201).json({data: eventOrganizer});
  } catch (err) {
    console.log(err);
    //return res.status(500).json({message: 'Server error'});
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const allEventsOrganizers = await eventOrgService.listAll();
    res.json(allEventsOrganizers);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Server error'});
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const eventOrganizer = await eventOrgService.listById(Number(req.params.id));
    if (!eventOrganizer) {
      return res.status(404).json({message: 'Event organizer not found'});
    }
    res.json(eventOrganizer);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Server error'});
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedEventOrganizer = await eventOrgService.updateEventsOrganizer(Number(req.params.id), req.body);
    res.json(updatedEventOrganizer);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Server error'});
  }
}

export const deleteEventOrgById = async (req: Request, res: Response) => {
  try {
    await eventOrgService.deleteEventsOrganizer(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
}