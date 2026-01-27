import { Request, Response } from 'express';
import { userService } from '.';

export const createUser = async (req: Request, res: Response) => {
  // Logic to create a user
  const newUser = await userService.createUser(req.body);

  res.status(201).json({ newUser });
};
