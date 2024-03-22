import {
  NewAccessDto,
  UpdateAccessDto,
} from 'src/core/shared/dto/Access/access_dto';
import { Access } from 'src/domain/entities/Access.entity';

export class AccessRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Access.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Access.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(access: NewAccessDto) {
    try {
      return Access.create(access);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, access: UpdateAccessDto) {
    try {
      return Access.update(access, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Access.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
