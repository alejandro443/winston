import { UpdateSettingDto } from 'src/core/shared/dto/Setting/setting_dto';
import { SettingService } from 'src/domain/services/SettingService/SettingService';

export class UpdateSettingUseCase {
  constructor(private settingService?: SettingService) {
    this.settingService = new SettingService();
  }

  async updateSetting(option: any, setting: UpdateSettingDto) {
    try {
      const response: any = await this.settingService?.updateSetting(
        option,
        setting,
      );
      return {
        id: response.id,
        option: response.option,
        value: response.value,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
