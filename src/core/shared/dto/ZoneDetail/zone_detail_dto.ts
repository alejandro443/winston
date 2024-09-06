import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsNumber} from 'class-validator';
import { ClientDto } from '../Client/client_dto';
import { UserDto } from '../User/user_dto';
import { ZoneDto } from '../Zone/zone_dto';

export class ZoneDetailDto {
  @ApiProperty({
    description: 'Id de la zona detail.',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiResponseProperty({
    type: ZoneDto,
  })
  zone?: ZoneDto;

  @ApiResponseProperty({
    type: Number,
  })
  clients?: number;

  @ApiResponseProperty({
    type: Array,
  })
  users?: [];
}

export class AllZoneDetailDto extends PartialType(ZoneDetailDto) { }

export class NewZoneDetailDto { 
  zone_id?: number;
  client_id?: number;
  user_id?: number;
}

export class UpdateZoneDetailDto extends OmitType(ZoneDetailDto, ['id'] as const) { }