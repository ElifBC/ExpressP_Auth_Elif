/* Elif Bilge Canatan- 301245216-COMP229-F2022-402 */

// Index Routes
import { Router } from 'express';
import { displayHomePage, displayAboutPage, displayContactPage, displayProjectsPage, displayHobbiesPage } from '../controllers/index.controller.server.js'

//Instanciating the router
const router = Router();


// add middleware to connect application
router.get('/',displayHomePage);
router.get('/hello',displayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/projects', displayProjectsPage);
router.get('/hobbies', displayHobbiesPage);

export default router;