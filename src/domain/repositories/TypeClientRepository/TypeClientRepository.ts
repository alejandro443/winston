import {
  NewTypeClientDto,
  UpdateTypeClientDto,
} from 'src/core/shared/dto/TypeClient/type_client_dto';
import { TypeClient } from 'src/domain/entities/TypeClient.entity';

export class TypeClientRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return TypeClient.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return TypeClient.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(type_client: NewTypeClientDto) {
    try {
      return TypeClient.create(type_client);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, type_client: UpdateTypeClientDto) {
    try {
      return TypeClient.update(type_client, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return TypeClient.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
