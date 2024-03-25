import { UpdatePersonDto } from 'src/core/shared/dto/Person/person_dto';
import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class UpdatePersonUseCase {
  constructor(private clientService?: PersonService) {
    this.clientService = new PersonService();
  }

  async updatePerson(code: any, client: UpdatePersonDto) {
    try {
      const response: any = await this.clientService?.updatePerson(code, client);
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
