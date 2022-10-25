import { Router } from "express";

import { DisplayContactsList, DisplayContactsAddPage, ProcessContactsAddPage, ProcessContactsEditPage, DisplayContactsEditPage, ProcessContactsDelete} from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/list', DisplayContactsList);
router.get('/contacts-add', AuthGuard, DisplayContactsAddPage);   
router.post('/contacts-add', AuthGuard, ProcessContactsAddPage);
router.post('/contacts-edit/:id', AuthGuard, ProcessContactsEditPage);
router.get('/contacts-edit/:id', AuthGuard, DisplayContactsEditPage);
router.get('/contacts-delete/:id', AuthGuard, ProcessContactsDelete); 

export default router;