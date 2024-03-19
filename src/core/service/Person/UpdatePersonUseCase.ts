import { UpdatePersonDto } from 'src/core/shared/dto/Person/person_dto';
import { PersonService } from 'src/domain/services/PersonService/PersonService';

export class UpdatePersonUseCase {
  constructor(private clientService?: PersonService) {
    this.clientService = new PersonService();
  }

  async updatePerson(code: string, client: UpdatePersonDto) {
    try {
      const response = await this.clientService.updatePerson(code, client);
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
