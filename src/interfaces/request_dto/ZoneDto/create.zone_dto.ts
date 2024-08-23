import { OmitType } from '@nestjs/swagger';
import { ZoneDto } from 'src/core/shared/dto/Zone/zone_dto';

export class CreateZoneRequestDto extends
  OmitType(ZoneDto, ['id'] as const) { }