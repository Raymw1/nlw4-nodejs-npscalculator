import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
const routes = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

routes.post('/users', userController.create);
routes.get('/surveys', surveyController.show);
routes.post('/surveys', surveyController.create);
routes.post('/sendMail', sendMailController.execute);
routes.get('/answers/:value', answerController.execute);

export { routes };
