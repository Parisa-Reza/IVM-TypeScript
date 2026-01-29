import { Request, Response, NextFunction } from 'express';
export const authenticate = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  if (req.user) {
    // here if express request has user object named user then we will call next function
    return next();
  }
  return _res.status(401).json({ message: 'Unauthorized' });
};
