import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
const routes = Router();

const userController = new UserController();
const surveyController = new SurveysController();

routes.post('/users', userController.create);
routes.post('/surveys', surveyController.create);

export { routes };
