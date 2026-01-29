import cors from 'cors';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { envConfig, connectDB } from '@/config';
import configureRouters from '@/routes';
import { errorHandler } from '@/middlewares';

import './auth/strategy';

const app = express();
connectDB();
app.use(express.json());
// here app.use(express.json()) will parse the incoming request body as JSON and populate req.body with the parsed data.
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  cors({
    origin: envConfig.CORS_ORIGIN,
    credentials: true,
  }),
);

// session configuration
app.use(
  session({
    secret: envConfig.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // as we will use redis 
    
  }),
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.authenticate('session'));

configureRouters(app);
// here flow will go to routes/index.ts then to admin/index.ts and then to user.route.ts
app.use(errorHandler);
// here errorHandler middleware will handle any errors that occur in the route handlers

const port = envConfig.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
