import {Request, Response} from 'express';
import {
    createEventsOrganizer, 
    deleteEventsOrganizer, 
    listAll, 
    listById, 
    updateEventsOrganizer} 
    from '../services/events.org.service';

export const create = async (req: Request, res: Response) => {
  try {
    const {name, email, phoneNumber} = req.body;

    const eventOrganizer = await createEventsOrganizer({
      name,
      email,
      phoneNumber,
    });

    return res.status(201).json({data: eventOrganizer});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const allEvents = await listAll();

    return res.status(200).json({data: allEvents});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const eventById = await listById(Number(id));

    if (!eventById) {
      return res
        .status(200)
        .json({data: [], message: 'Information not found'});
    }
    return res.status(200).json({data: eventById});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const eventData = req.body;

    const updatedEvent = await updateEventsOrganizer(Number(id), eventData);

    return res.status(200).json({data: updatedEvent});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
}

export const deleteEventOrgById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    await deleteEventsOrganizer(Number(id));

    return res.status(204).json({data: []});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: 'Server error'});
  }
}