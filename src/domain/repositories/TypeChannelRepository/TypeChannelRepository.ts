import {
  NewTypeChannelDto,
  UpdateTypeChannelDto,
} from 'src/core/shared/dto/TypeChannel/type_channel_dto';
import { TypeChannel } from 'src/domain/entities/TypeChannel.entity';

export class TypeChannelRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return TypeChannel.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return TypeChannel.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(type_channel: NewTypeChannelDto) {
    try {
      return TypeChannel.create(type_channel);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, type_channel: UpdateTypeChannelDto) {
    try {
      return TypeChannel.update(type_channel, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return TypeChannel.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
