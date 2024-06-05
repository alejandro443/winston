import { NewTypeChannelDto } from 'src/core/shared/dto/TypeChannel/type_channel_dto';
import { TypeChannelRepository } from 'src/domain/repositories/TypeChannelRepository/TypeChannelRepository';

export class TypeChannelService {
  constructor(private repository?: TypeChannelRepository) {
    this.repository = new TypeChannelRepository();
  }

  async getOneTypeChannel(code: string) {
    try {
      return this.repository?.findOne(code);
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
      return error;
    }
  }

  async updateTypeChannel(code: any, type_channel: NewTypeChannelDto) {
    try {
      return this.repository?.update(code, type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeChannel(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
