import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphansController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//index, show, create, update, delete
routes.get('/orphanages', OrphansController.index);
routes.get('/orphanages/:id', OrphansController.show);
routes.post('/orphanages', upload.array('images'), OrphansController.create);

export default routes;