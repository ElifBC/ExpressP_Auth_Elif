import { Router } from "express";

import { DisplayContactsList} from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/list', DisplayContactsList);

export default router;