import { PickType } from '@nestjs/swagger';
import { SettingDto } from '@src/core/shared/dto/Setting/setting_dto';

export class GetSettingRequestDto extends PickType(SettingDto, ['option'] as const) { }