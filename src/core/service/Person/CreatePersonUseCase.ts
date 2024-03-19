import { PersonService } from 'src/domain/services/PersonService/PersonService';
import { NewPersonDto } from 'src/core/shared/dto/Person/person_dto';

export class CreatePersonUseCase {
  constructor(private personService?: PersonService) {
    this.personService = new PersonService();
  }

  async createPerson(person: NewPersonDto) {
    try {
      const response = await this.personService.createPerson(person);
      return { ...response };
    } catch (error) {
      return error;
    }
  }
}
