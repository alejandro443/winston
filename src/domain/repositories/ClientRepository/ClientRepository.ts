import {
  NewClientDto,
  UpdateClientDto,
} from 'src/core/shared/dto/Client/client_dto';
import { Client } from 'src/domain/entities/Client.entity';

export class ClientRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Client.findOne({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Client.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(worker: NewClientDto) {
    try {
      return Client.create(worker);
    } catch (error) {
      return error;
    }
  }

  async update(code: string, worker: UpdateClientDto) {
    try {
      return Client.update(worker, { where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Client.destroy({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }
}
