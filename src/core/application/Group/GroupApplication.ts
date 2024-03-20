import {
  AllGroupDto,
  NewGroupDto,
  OneGroupDto,
  UpdateGroupDto,
} from '@dto/Group/group_dto';

export interface GroupApplication {
  getAllGroup(): Promise<Array<AllGroupDto>>;
  getOneGroup(code: string): Promise<OneGroupDto>;
  createGroup(group: NewGroupDto): Promise<OneGroupDto>;
  updateGroup(code: string, group: UpdateGroupDto): Promise<OneGroupDto>;
  deleteGroup(code: string);
}
