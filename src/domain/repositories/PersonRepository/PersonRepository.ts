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
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Person.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(person: NewPersonDto) {
    try {
      return Person.create(person);
    } catch (error) {
      return error;
    }
  }

  async update(main_identification: string, person: UpdatePersonDto) {
    try {
      return Person.update(person, {
        where: { main_identification: main_identification },
      });
    } catch (error) {
      return error;
    }
  }

  async deleted(main_identification: string) {
    try {
      return Person.destroy({
        where: { main_identification: main_identification },
      });
    } catch (error) {
      return error;
    }
  }
}
