import { UpdatePersonDto } from '@dto/Person/person_dto';
import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class UpdatePersonUseCase {
  constructor(private clientService?: PersonService) {
    this.clientService = new PersonService();
  }

  async updatePerson(code: string, client: UpdatePersonDto) {
    try {
      const response = await this.clientService.updatePerson(code, client);
      return { ...response.dataValues };
    } catch (error) {
      return error;
    }
  }
}
