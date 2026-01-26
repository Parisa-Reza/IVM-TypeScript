import { Request, Response } from "express";

export const createUser = (_req: Request, _res: Response) => {
  // Logic to create a user
   console.log("user created",_req.body);
  _res.status(201).json({ message: "User created successfully" });
}