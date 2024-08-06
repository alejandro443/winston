import { OmitType } from '@nestjs/swagger';
import { SettingDto } from '@src/core/shared/dto/Setting/setting_dto';

export class UpdateSettingRequestDto extends
  OmitType(SettingDto, ['option', 'created_at'] as const) { }