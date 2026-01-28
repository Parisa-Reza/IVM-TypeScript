//The local authentication strategy authenticates users using a username and password.
// The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserDocument, userService } from '@/modules/user';
passport.use(
  new LocalStrategy(function (email, password, done) {
    userService
      .findUserByEmail(email)
      // Calls service layer to find user by email.
      .then((user) => {
        if (!user || user.deleted) {
          return done(null, false);
        }

        // done(error, user, info?) done function signature
        //     If no user → authentication fails
        // done(null, false) means no error, but login failed
        // No error, but login failed
        // req.user = undefined

        // verify password
        if (!userService.verifyPassword(user, password)) {
          return done(null, false);
        }
        // here we call the verifyPassword function from the user service to compare the provided password with the stored hashed password.

        return done(null, {
          _id: user.id,
          email: user.email,
          role: user.role,
        });
      })
      .catch((err) => done(err));
  }),
);

passport.serializeUser((user: UserDocument, cb)=>{
   process.nextTick(function(){
  cb(null, {
    _id : user._id,
    email : user.email,
    name : user.name,
    role : user.role,

  });
})
});

passport.deserializeUser((user : UserDocument, cb)=>{
 process.nextTick(function(){
   return  cb(null, user);
})
});