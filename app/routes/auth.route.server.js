import { Router} from "express";
import { DisplayLoginPage, ProcessLoginPage, ProcessLogoutPage} from "../controllers/auth.controller.server.js";

const router = Router();

//Display Login Router
router.get('/login', DisplayLoginPage);

// Process Login Page
router.post('/login', ProcessLoginPage);

// Process logout 
router.get('/logout', ProcessLogoutPage);

export default router;