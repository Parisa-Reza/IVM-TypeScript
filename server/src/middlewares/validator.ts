import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validateRequestBody = (schema: ZodSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    schema.parse(req.body);
    // here if validation fails, Zod will throw an error and skip to errorHandler middleware

    next();
  };
};
