import { ApiProperty } from '@nestjs/swagger';
import { SettingDto } from '@src/core/shared/dto/Setting/setting_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class SettingResponse extends AppResponse {
  @ApiProperty({
    type: SettingDto,
    nullable: true,
  })
  data?: object;
}

export class SettingsResponse extends AppResponse {
  @ApiProperty({
    type: [SettingDto],
    nullable: true,
  })
  data?: SettingDto[];
}
