import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class DeletePersonUseCase {
  constructor(private workerService?: PersonService) {
    this.workerService = new PersonService();
  }

  async deletePerson(code: string) {
    try {
      const response = await this.workerService.deletePerson(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
