import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
const routes = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();

routes.post('/users', userController.create);
routes.get('/surveys', surveyController.show);
routes.post('/surveys', surveyController.create);
routes.post('/sendMail', sendMailController.execute);

export { routes };
