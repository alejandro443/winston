import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { UpdateClientDto } from 'src/core/shared/dto/Client/client_dto';
import { Client } from 'src/domain/entities/Client.entity';

export class ClientRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Client.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
  
  async findOneClientByIdEntity(id: number, type_entity: string) {
    try {
      return Client.findOne({ where: { entity_id: id, type_entity: type_entity } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Client.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(client: any, object: any) {
    try {
      const clientCreate: any = await Client.create(client);
      await clientCreate.$set(client.type_entity, object);
      return clientCreate;
    } catch (error: any) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: number, client: UpdateClientDto) {
    try {
      const clientUpdate: any = await Client.update(client, { where: { id: id } });
      return clientUpdate;
    } catch (error: any) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async deleted(id: number) {
    try {
      return Client.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findOneByUser(user_id: number) {
    try {
      return Client.findOne({ where: { user_id: user_id } });
    } catch (error: any) {
      return error;
    }
  }
}
