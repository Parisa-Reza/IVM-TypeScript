import { Express } from "express";

import adminRouter from "./admin";

 const configureRouters = (app: Express) => {
  app.use("/api/admin", adminRouter);
}

export default configureRouters;
// here flow will go to admin/index.ts then admin/index.ts will redirect to user.route.ts