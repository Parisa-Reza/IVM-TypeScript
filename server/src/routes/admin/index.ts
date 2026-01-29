import { Router } from 'express';
import adminUserRouter from './user.route';
import adminInstanceRouter from './instance.route';

const adminRouter = Router();

adminRouter.use('/users', adminUserRouter);
adminRouter.use('/instances',adminInstanceRouter)

export default adminRouter;
// from here flow will go to user.route.ts
