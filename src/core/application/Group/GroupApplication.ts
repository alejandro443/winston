import {
  AllGroupDto,
  NewGroupDto,
  OneGroupDto,
  UpdateGroupDto,
} from 'src/core/shared/dto/Group/group_dto';

export interface GroupApplication {
  getAllGroup(): Promise<Array<AllGroupDto>>;
  getOneGroup(code: any): Promise<OneGroupDto>;
  createGroup(group: NewGroupDto): Promise<OneGroupDto>;
  updateGroup(code: any, group: UpdateGroupDto): Promise<OneGroupDto>;
  deleteGroup(code: any): any;
}
