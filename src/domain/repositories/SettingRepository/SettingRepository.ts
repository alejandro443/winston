import { UpdateSettingDto } from '@src/core/shared/dto/Setting/setting_dto';
import { Setting } from 'src/domain/entities/Setting.entity';

export class SettingRepository {
  constructor() {}

  async findAll() {
    try {
      var find_all: any = await Setting.findAll({ where: { status: true } });
      return find_all;
    } catch (error) {
      return error;
    }
  }

  async findOne(option: string) {
    try {
      var find_one: any = await Setting.findOne({ where: { option: option } });
      return find_one;
    } catch (error) {
      return error;
    }
  }

  async update(option: string, district: UpdateSettingDto) {
    try {
      return Setting.update(district, { where: { option: option } });
    } catch (error) {
      return error;
    }
  }
}
