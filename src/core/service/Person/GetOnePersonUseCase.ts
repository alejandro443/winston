import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class GetOnePersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async getOnePerson(code: string) {
    try {
      const response = await this.workerService.getOnePerson(code);
      return {
        id: response.id,
        code: response.code,
        status: response.status,
        user_id: response.user_id,
        person_identification: response.person_identification,
        type_worker_code: response.type_worker_code,
      };
    } catch (error) {
      return error;
    }
  }
}
