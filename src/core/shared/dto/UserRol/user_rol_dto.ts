import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class UserRolDto {
  @IsNumber()
  id?: number;

  @IsNumber()
  rol_id?: number;

  @IsNumber()
  user_id?: number;

  @IsBoolean()
  status?: boolean;
}

export class DeleteUserRolDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneUserRolDto extends UserRolDto {}
export interface AllUserRolDto extends UserRolDto {}
export interface NewUserRolDto extends Omit<UserRolDto, 'id'> {}
export interface UpdateUserRolDto extends Omit<UserRolDto, 'id'> {}
