import { IsObject, IsString } from 'class-validator';
import { UserDto } from '../User/user_dto';

export interface LoginDto
  extends Omit<UserDto, 'id, code, consultant, status'> {}

export class LoginResponseDto {
  @IsString()
  code: string;

  @IsString()
  rol: string;

  @IsString()
  session_id?: string;

  @IsString()
  token: string;

  @IsObject()
  accesses: object;
}
