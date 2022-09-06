import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });
    const detractors = surveysUsers.filter(
      (survey) => survey.value <= 6
    ).length;
    const promoters = surveysUsers.filter((survey) => survey.value >= 9).length;
    const passive = surveysUsers.filter(
      (survey) => survey.value > 6 && survey.value < 9
    ).length;
    const totalAnswers = surveysUsers.length;
    const nps = Number(
      (((promoters - detractors) / totalAnswers) * 100).toFixed(2)
    );
    return response.json({ detractors, passive, promoters, totalAnswers, nps });
  }
}

export { NpsController };
