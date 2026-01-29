// import { envConfig } from '@/config';
import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post(
  '/login/password',
  passport.authenticate('local'),
  (req, res) => {
    res.status(200).json({ message: 'Login succeeeessful', user: req.user });
  }
);
export default router;

// , {
//     successReturnToOrRedirect: `${envConfig.CLIENT_URL}`,
//     failureRedirect: `${envConfig.CLIENT_URL}/login`,
//     failureMessage: true,
//   }