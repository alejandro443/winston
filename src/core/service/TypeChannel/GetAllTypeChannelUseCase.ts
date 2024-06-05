import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';

export class GetAllTypeChannelUseCase {
  constructor(private type_channelService?: TypeChannelService) {
    this.type_channelService = new TypeChannelService();
  }

  async getAllTypeChannel() {
    try {
      const response: any = await this.type_channelService?.getAllTypeChannel();

      return response.map((type_channel: any) => ({
        id: type_channel.id,
        code: type_channel.code,
        name: type_channel.name,
        description: type_channel.description,
        status: type_channel.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
