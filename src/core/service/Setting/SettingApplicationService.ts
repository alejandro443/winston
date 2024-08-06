import { SettingApplication } from 'src/core/application/Setting/SettingApplication';
import {
  UpdateSettingDto,
} from 'src/core/shared/dto/Setting/setting_dto';
import { GetOneSettingUseCase } from './GetOneSettingUseCase';
import { GetAllSettingUseCase } from './GetAllSettingUseCase';
import { UpdateSettingUseCase } from './UpdateSettingUseCase';
export class SettingApplicationService implements SettingApplication {
  constructor(
    private getOneUseCase?: GetOneSettingUseCase,
    private getAllUseCase?: GetAllSettingUseCase,
    private updateUseCase?: UpdateSettingUseCase,
  ) {
    this.getOneUseCase = new GetOneSettingUseCase();
    this.getAllUseCase = new GetAllSettingUseCase();
    this.updateUseCase = new UpdateSettingUseCase();
  }

  async getAllSetting() {
    try {
      return this.getAllUseCase?.getAllSetting();
    } catch (error: any) {
      return error;
    }
  }

  async getOneSetting(option: string): Promise<any> {
    try {
      return this.getOneUseCase?.getOneSetting(option);
    } catch (error: any) {
      return error;
    }
  }

  async updateSetting(
    option: any,
    setting: UpdateSettingDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateSetting(option, setting);
    } catch (error: any) {
      return error;
    }
  }
}
