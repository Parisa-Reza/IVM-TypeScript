import { Express } from 'express';
import authRouter from './auth';
import adminRouter from './admin';
import baseRouter from './health';

const configureRouters = (app: Express) => {
  app.use('/auth/',authRouter);
  app.use('/api/', baseRouter);
  app.use('/api/admin', adminRouter);
};

export default configureRouters;
// here flow will go to admin/index.ts then admin/index.ts will redirect to user.route.ts

//  app.ts-> routes/index.ts -> admin/index.ts ->user.route.ts

// app.ts -> routes/index.ts -> health.ts
