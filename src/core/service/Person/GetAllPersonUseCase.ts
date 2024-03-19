import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class GetAllPersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async getAllPerson() {
    try {
      const response = await this.workerService.getAllPerson();

      return response.map((worker) => ({
        id: worker.id,
        code: worker.code,
        status: worker.status,
        user_id: worker.user_id,
        person_identification: worker.person_identification,
        type_worker_code: worker.type_worker_code,
      }));
    } catch (error) {
      return error;
    }
  }
}
