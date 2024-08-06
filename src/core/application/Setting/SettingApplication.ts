import {
  AllSettingDto,
  OneSettingDto,
  UpdateSettingDto,
} from 'src/core/shared/dto/Setting/setting_dto';

export interface SettingApplication {
  getAllSetting(): Promise<Array<AllSettingDto>>;
  getOneSetting(option: any): Promise<OneSettingDto>;
  updateSetting(
    option: any,
    setting: UpdateSettingDto,
  ): Promise<OneSettingDto>;
}
