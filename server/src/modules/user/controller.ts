import { CreateUserSchema } from "@/schemas";
import { Request, Response } from "express";

export const createUser = (_req: Request, _res: Response) => {
  // Logic to create a user
   console.log("user created",_req.body);
   const parsedBody = CreateUserSchema.parse(_req.body); // assuming body has been parsed by express.json() middleware
  _res.status(201).json({ message: "User created successfully" });
}