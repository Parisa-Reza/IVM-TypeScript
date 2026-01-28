//The local authentication strategy authenticates users using a username and password.
// The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { userService } from '@/modules/user';
import { User } from '@/types';

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      // Calls service layer to find user by email.
      const user = await userService.findUserByEmail(email);
      if (!user || user.deleted) {
        return done(null, false);
      }

      // Calls service layer to verify password.
      const isPasswordValid = await userService.verifyPassword(user, password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

// done(error, user, info?) done function signature
//     If no user → authentication fails
// done(null, false) means no error, but login failed
// No error, but login failed
// req.user = undefined

passport.serializeUser((user, done) => {
  console.log('serializeUser called');
  process.nextTick(() => done(null, user));
});
// serializeUser determines which data of the user object should be stored in the session.
passport.deserializeUser((user: User, done) => {
  console.log('deserializeUser called');
  process.nextTick(() => done(null, user));
});
// deserializeUser is called on every request by passport.session middleware to retrieve user details from the session.

//When we pass a function to process.nextTick(), we instruct the engine to invoke this function immediately after the current operation completes, before moving to the next phase in the event loop:
