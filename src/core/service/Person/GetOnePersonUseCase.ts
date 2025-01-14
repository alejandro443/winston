import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class GetOnePersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async getOnePerson(code: string) {
    try {
      const response: any = await this.workerService?.getOnePerson(code);
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
