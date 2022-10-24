import { Router } from "express";

import { DisplayContactsList, DisplayContactsAddPage, ProcessContactsAddPage, ProcessContactsEditPage, DisplayContactsEditPage, ProcessContactsDelete} from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/list', DisplayContactsList);
router.get('/contacts-add',  DisplayContactsAddPage);     //add authguard later
router.post('/contacts-add',  ProcessContactsAddPage);
router.post('/contacts-edit/:id', ProcessContactsEditPage);
router.get('/contacts-edit/:id',  DisplayContactsEditPage);
router.get('/contacts-delete/:id', ProcessContactsDelete); 

export default router;