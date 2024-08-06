import { UpdateSettingDto } from '@src/core/shared/dto/Setting/setting_dto';
import { SettingRepository } from 'src/domain/repositories/SettingRepository/SettingRepository';

export class SettingService {
  constructor(private repository?: SettingRepository) {
    this.repository = new SettingRepository();
  }

  async getOneSetting(code: string) {
    try {
      var one_setting: any = await this.repository?.findOne(code);
      return one_setting;
    } catch (error: any) {
      return error;
    }
  }

  async getAllSetting() {
    try {
      var all_setting: any = await this.repository?.findAll();
      return all_setting;
    } catch (error: any) {
      return error;
    }
  }

  async updateSetting(option: any, type_client: UpdateSettingDto) {
    try {
      return this.repository?.update(option, type_client);
    } catch (error: any) {
      return error;
    }
  }

}
