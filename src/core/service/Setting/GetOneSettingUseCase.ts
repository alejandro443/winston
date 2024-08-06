import { SettingService } from 'src/domain/services/SettingService/SettingService';

export class GetOneSettingUseCase {
  constructor(private classificationService?: SettingService) {
    this.classificationService = new SettingService();
  }

  async getOneSetting(option: string) {
    try {
      const response: any =
        await this.classificationService?.getOneSetting(option);
      return {
        id: response.id,
        option: response.option,
        value: response.name,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
