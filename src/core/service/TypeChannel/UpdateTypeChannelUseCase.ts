import { UpdateTypeChannelDto } from 'src/core/shared/dto/TypeChannel/type_channel_dto';
import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';

export class UpdateTypeChannelUseCase {
  constructor(private type_channelService?: TypeChannelService) {
    this.type_channelService = new TypeChannelService();
  }

  async updateTypeChannel(code: any, type_channel: UpdateTypeChannelDto) {
    try {
      const response: any = await this.type_channelService?.updateTypeChannel(
        code,
        type_channel,
      );
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
