import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';

export class DeleteTypeChannelUseCase {
  constructor(private type_channelService?: TypeChannelService) {
    this.type_channelService = new TypeChannelService();
  }

  async deleteTypeChannel(code: string) {
    try {
      const response: any =
        await this.type_channelService?.deleteTypeChannel(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
