import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@/types';

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

export const authorize = (roles: UserRole[]) =>
   (req: Request, res: Response, next: NextFunction) => {
    if(req.user && roles.includes(req.user.role)) {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden' });
   }