import {
  NewTypeClientDto,
  UpdateTypeClientDto,
} from 'src/core/shared/dto/TypeClient/type_client_dto';
import { TypeClient } from 'src/domain/entities/TypeClient.entity';

export class TypeClientRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return TypeClient.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return TypeClient.findAll({ where: { deleted_at: '' } });
    } catch (error: any) {
      return error;
    }
  }

  async create(type_client: any) {
    try {
      return TypeClient.create(type_client);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, type_client: UpdateTypeClientDto) {
    try {
      return TypeClient.update(type_client, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return TypeClient.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
