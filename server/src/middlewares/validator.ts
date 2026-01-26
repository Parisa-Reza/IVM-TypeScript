import {Request, Response, NextFunction} from "express";
import { ZodSchema } from "zod";


export const validateRequestBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const {error} = schema.safeParse(req.body);
        if (error) {
            return res.status(400).json({error: error.message});
        }
        next();
    }
}