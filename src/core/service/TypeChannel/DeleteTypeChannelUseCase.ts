import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';

export class DeleteTypeChannelUseCase {
  constructor(private type_channelService?: TypeChannelService) {
    this.type_channelService = new TypeChannelService();
  }

  async deleteTypeChannel(id_type_channel: number) {
    try {
      const response: any =
        await this.type_channelService?.deleteTypeChannel(id_type_channel);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
