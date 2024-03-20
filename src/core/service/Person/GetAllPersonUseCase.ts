import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class GetAllPersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async getAllPerson() {
    try {
      const response = await this.workerService.getAllPerson();

      return response.map((worker) => ({...worker.dataValues}));
    } catch (error) {
      return error;
    }
  }
}
