import { TypeChannelService } from 'src/domain/services/TypeChannelService/TypeChannelService';

export class GetOneTypeChannelUseCase {
  constructor(private typeChannelService?: TypeChannelService) {
    this.typeChannelService = new TypeChannelService();
  }

  async getOneTypeChannel(code: string) {
    try {
      const response: any =
        await this.typeChannelService?.getOneTypeChannel(code);
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
