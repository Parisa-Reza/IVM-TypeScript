import { envConfig } from "@/config";
import { Router } from "express";
import passport from "passport";

const router = Router();
 

router.post("/login/password",passport.authenticate("local", {
    successReturnToOrRedirect: envConfig.CLIENT_URL , 
    failureRedirect: `${envConfig.CLIENT_URL}/login`,  
    failureMessage: true
}));
export default router;