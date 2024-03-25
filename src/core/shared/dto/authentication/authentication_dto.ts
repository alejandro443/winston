import { IsObject, IsString } from 'class-validator';
import { UserDto } from '../User/user_dto';

export interface LoginDto
  extends Omit<UserDto, 'id, code, consultant, status'> {}

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
