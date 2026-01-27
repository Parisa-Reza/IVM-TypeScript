import { ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log('Error caught by errorHandler---- middleware');

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.message });
  }

  // handle mongoose duplicate key error
  if (err.name === 'MongoServerError' && 'code' in err && err.code === 11000) {
    res.status(409).json({ error: 'Duplicate key error' });
  }

  // handle mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  // handle mongoose cast error
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  console.log('****************************');
  console.error(err);
  console.log('****************************');

  res.status(500).json({ error: 'Internal Server Error' });
};
