import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id?: number;

  @IsString()
  user?: string;

  @IsString()
  password?: string;

  @IsString()
  code?: string;

  @IsString()
  consultant?: boolean;

  @IsBoolean()
  status?: boolean;
}

export class DeleteUserDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneUserDto extends UserDto {}
export interface AllUserDto extends UserDto {}
export interface NewUserDto extends Omit<UserDto, 'id'> {}
export interface UpdateUserDto extends Omit<UserDto, 'id'> {}
