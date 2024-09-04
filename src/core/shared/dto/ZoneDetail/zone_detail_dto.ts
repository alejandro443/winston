import { PartialType } from '@nestjs/swagger';
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
    type: [ClientDto],
  })
  clients?: ClientDto[];

  @ApiResponseProperty({
    type: [UserDto],
  })
  users?: UserDto[];
}

export class AllZoneDetailDto extends PartialType(ZoneDetailDto) { }