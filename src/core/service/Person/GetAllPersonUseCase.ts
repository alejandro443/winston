import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class GetAllPersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async getAllPerson() {
    try {
      const response: any = await this.workerService?.getAllPerson();

      return response.map((worker: any) => ({ ...worker.dataValues }));
    } catch (error: any) {
      return error;
    }
  }
}
