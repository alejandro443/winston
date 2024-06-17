import { IsObject, IsString } from 'class-validator';
import { UserDto } from '../User/user_dto';
import { OmitType } from '@nestjs/swagger';

export class LoginDto extends OmitType(UserDto, ['id', 'code', 'consultant', 'status'] as const) {}

export class LoginResponseDto {
  @IsString()
  declare code: string;

  @IsString()
  declare rol: string;

  @IsString()
  declare session_id?: string;

  @IsString()
  declare token: string;

  @IsObject()
  declare accesses: object;
}
