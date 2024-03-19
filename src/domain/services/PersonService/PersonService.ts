import { NewPersonDto } from 'src/core/shared/dto/Person/person_dto';
import { PersonRepository } from 'src/domain/repositories/PersonRepository/PersonRepository';

export class PersonService {
  constructor(private repository?: PersonRepository) {
    this.repository = new PersonRepository();
  }

  async getOnePerson(main_identification: string) {
    try {
      return this.repository.findOne(main_identification);
    } catch (error) {
      return error;
    }
  }

  async getAllPerson() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return error;
    }
  }

  async createPerson(person: NewPersonDto) {
    try {
      return this.repository.create(person);
    } catch (error) {
      return error;
    }
  }

  async updatePerson(main_identification: string, person: NewPersonDto) {
    try {
      return this.repository.update(main_identification, person);
    } catch (error) {
      return error;
    }
  }

  async deletePerson(main_identification: string) {
    try {
      return this.repository.deleted(main_identification);
    } catch (error) {
      return error;
    }
  }
}
