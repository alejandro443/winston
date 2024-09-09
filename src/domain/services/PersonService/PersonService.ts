import { PersonApplicationError } from '@src/core/shared/error/PersonApplicationError';
import { GenerateRandomIdentificationPerson } from '@src/core/shared/functions/generate_identification_person.function';
import { present } from '@src/domain/libraries/my-lodash-present';
import { NewPersonDto } from 'src/core/shared/dto/Person/person_dto';
import { PersonRepository } from 'src/domain/repositories/PersonRepository/PersonRepository';

export class PersonService {
  constructor(private repository?: PersonRepository) {
    this.repository = new PersonRepository();
  }

  async getOnePerson(main_identification: string) {
    try {
      return this.repository?.findOne(main_identification);
    } catch (error: any) {
      throw new PersonApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async getAllPerson() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createPerson(person: NewPersonDto) {
    try {

      person.main_identification = 
        await present(person.main_identification) ? 
          await GenerateRandomIdentificationPerson() : 
          person.main_identification;

      var person_new: any = await this.repository?.create(person);

      return person_new;
    } catch (error: any) {
      return new PersonApplicationError(error)
    }
  }

  async updatePerson(main_identification: string, person: NewPersonDto) {
    try {
      const person_update: any = this.repository?.update(main_identification, person);
      return person_update;
    } catch (error: any) {
      return error;
    }
  }

  async deletePerson(main_identification: string) {
    try {
      return this.repository?.deleted(main_identification);
    } catch (error: any) {
      return error;
    }
  }
}
