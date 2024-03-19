import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class AccessRolDto {
  @IsNumber()
  id?: number;

  @IsNumber()
  rol_id?: number;

  @IsNumber()
  access_id?: number;

  @IsBoolean()
  status?: boolean;
}

export class DeleteAccessRolDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneAccessRolDto extends AccessRolDto {}
export interface AllAccessRolDto extends AccessRolDto {}
export interface NewAccessRolDto extends Omit<AccessRolDto, 'id'> {}
export interface UpdateAccessRolDto
  extends Omit<AccessRolDto, 'id'> {}