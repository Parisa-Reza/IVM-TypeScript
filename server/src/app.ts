import cors from 'cors';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { envConfig, connectDB } from '@/config';
import configureRouters from '@/routes';
import { errorHandler } from '@/middlewares';

import './auth/strategy';

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

// session configuration
app.use(cookieParser());
app.use(
  session({
    secret: envConfig.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // as we will use redis so for the time being we will comment it out
    // cookie: {
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day
    //   httpOnly: true,
    //   secure: envConfig.ENVIRONMENT === 'production',
    //   sameSite: envConfig.ENVIRONMENT === 'production' ? 'none' : 'lax',
    // },
  }),
);


// Initialize passport 
app.use(passport.initialize());
app.use(passport.authenticate('session'));

const port = envConfig.PORT;

configureRouters(app);
// here flow will go to routes/index.ts then to admin/index.ts and then to user.route.ts
app.use(errorHandler);
// here errorHandler middleware will handle any errors that occur in the route handlers

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
