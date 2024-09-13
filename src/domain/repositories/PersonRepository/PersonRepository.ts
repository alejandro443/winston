import { PersonApplicationError } from '@src/core/shared/error/PersonApplicationError';
import {
  NewPersonDto,
  UpdatePersonDto,
} from 'src/core/shared/dto/Person/person_dto';
import { Person } from 'src/domain/entities/Person.entity';

export class PersonRepository {
  constructor() {}

  async findOne(main_identification: string) {
    try {
      return Person.findOne({
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      throw new PersonApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async findAll() {
    try {
      return Person.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(person: NewPersonDto | object) {
    try {
      var person_data: any = await Person.create(person);
      return person_data;
    } catch (error: any) {
      throw new PersonApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(main_identification: string, person: UpdatePersonDto | object) {
    try {
      return Person.update(person, {
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(main_identification: string) {
    try {
      return Person.destroy({
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      return error;
    }
  }
}
