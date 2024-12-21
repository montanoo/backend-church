import { Request, Response } from 'express';
import * as tokenService from '../services/tokenService';

export const createToken = async (req: Request, res: Response) => {
  const { token, userId } = req.body;
  const newToken = await tokenService.createToken(token, userId);
  res.status(201).json(newToken);
};

export const getToken = async (req: Request, res: Response) => {
  const { id } = req.params;
  const token = await tokenService.getToken(Number(id));
  res.status(200).json(token);
};

export const getAllTokens = async (_req: Request, res: Response) => {
  const tokens = await tokenService.getAllTokens();
  res.status(200).json(tokens);
};

export const updateToken = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { token } = req.body;
  const updatedToken = await tokenService.updateToken(Number(id), token);
  res.status(200).json(updatedToken);
};

export const deleteToken = async (req: Request, res: Response) => {
  const { id } = req.params;
  await tokenService.deleteToken(Number(id));
  res.status(204).send();
};