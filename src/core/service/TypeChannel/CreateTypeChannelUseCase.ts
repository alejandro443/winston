import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';
import { NewTypeChannelDto } from 'src/core/shared/dto/TypeChannel/type_channel_dto';

export class CreateTypeChannelUseCase {
  constructor(private type_channelService?: TypeChannelService) {
    this.type_channelService = new TypeChannelService();
  }

  async createTypeChannel(type_channel: NewTypeChannelDto) {
    try {
      const response: any =
        await this.type_channelService?.createTypeChannel(type_channel);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      console.log(error)
      return error;
    }
  }
}
