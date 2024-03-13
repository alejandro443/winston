import { IsBoolean, IsDateString, IsNumber, IsString } from "class-validator";

class GroupDto {
  @IsNumber()
  id?: number;

  @IsString()
  name?: string;
  
  @IsString()
  description?: string;

  @IsString()
  code?: string;

  @IsBoolean()
  status?: boolean;
}
export class DeleteGroupDto {
  @IsDateString()
  deleted_at?: Date
}

export interface OneGroupDto extends GroupDto {}
export interface AllGroupDto extends GroupDto {}
export interface NewGroupDto extends Omit<GroupDto, 'id'> {}
export interface UpdateGroupDto extends Omit<GroupDto, 'id'> {}