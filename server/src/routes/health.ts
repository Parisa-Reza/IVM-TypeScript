import { Router, Request, Response } from 'express';

const baseRouter = Router();
baseRouter.get('/health', (_req: Request, _res: Response) => {
  _res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});
export default baseRouter;
