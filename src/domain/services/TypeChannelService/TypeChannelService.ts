import { NewTypeChannelDto } from 'src/core/shared/dto/TypeChannel/type_channel_dto';
import { TypeChannelRepository } from 'src/domain/repositories/TypeChannelRepository/TypeChannelRepository';

export class TypeChannelService {
  constructor(private repository?: TypeChannelRepository) {
    this.repository = new TypeChannelRepository();
  }

  async getOneTypeChannel(id_type_channel: number) {
    try {
      return this.repository?.findOne(id_type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async getAllTypeChannel() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createTypeChannel(type_channel: NewTypeChannelDto) {
    try {
      return this.repository?.create(type_channel);
    } catch (error: any) {
      console.log(error)
      return error;
    }
  }

  async updateTypeChannel(id_type_channel: any, type_channel: NewTypeChannelDto) {
    try {
      return this.repository?.update(id_type_channel, type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeChannel(id_type_channel: number) {
    try {
      return this.repository?.deleted(id_type_channel);
    } catch (error: any) {
      return error;
    }
  }
}
