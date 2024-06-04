import { UpdateClientDto } from 'src/core/shared/dto/Client/client_dto';
import { Client } from 'src/domain/entities/Client.entity';

export class ClientRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Client.findOne({ where: { code: code } });
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
      const clientCreate: any = Client.create(client);
      console.log("client repository",clientCreate)
      await clientCreate.$set(client.type_entity, object);
      
      return clientCreate;
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, client: UpdateClientDto) {
    try {
      return Client.update(client, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Client.destroy({ where: { code: code } });
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
