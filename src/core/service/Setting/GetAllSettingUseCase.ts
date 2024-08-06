import { SettingService } from 'src/domain/services/SettingService/SettingService';

export class GetAllSettingUseCase {
  constructor(private settingService?: SettingService) {
    this.settingService = new SettingService();
  }

  async getAllSetting() {
    try {
      const response: any = await this.settingService?.getAllSetting();

      return response.map((setting: any) => ({
        id: setting.id,
        option: setting.option,
        value: setting.value,
        status: setting.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
