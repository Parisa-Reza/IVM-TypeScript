import cors from 'cors';
import express from 'express';

import { envConfig, connectDB } from '@/config';
import configureRouters from '@/routes';
import { errorHandler } from '@/middlewares';

connectDB();

const app = express();
app.use(express.json());
// here app.use(express.json()) will parse the incoming request body as JSON and populate req.body with the parsed data.

app.use(
  cors({
    origin: envConfig.CORS_ORIGIN,
    credentials: true,
  }),
);

const port = envConfig.PORT;

configureRouters(app);
// here flow will go to routes/index.ts then to admin/index.ts and then to user.route.ts
app.use(errorHandler);
// here errorHandler middleware will handle any errors that occur in the route handlers

app.listen(port, () => {
  console.log(
    `Example app listening on port  ${port}`,
  );
});
