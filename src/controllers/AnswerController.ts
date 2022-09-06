import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { AppError } from '../errors/AppError';

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u: id } = request.query;
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const surveyUser = await surveysUsersRepository.findOne(String(id));
    if (!surveyUser) throw new AppError('Survey User does not exists!');
    surveyUser.value = Number(value);
    await surveysUsersRepository.save(surveyUser);
    return response.json(surveyUser);
  }
}

export { AnswerController };
