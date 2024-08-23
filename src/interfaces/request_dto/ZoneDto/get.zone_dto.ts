import { PickType } from '@nestjs/swagger';
import { ZoneDto } from '@src/core/shared/dto/Zone/zone_dto';

export class GetZoneRequestDto extends PickType(ZoneDto, ['id'] as const) { }
