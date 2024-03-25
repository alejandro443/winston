import {
  NewGroupDto,
  UpdateGroupDto,
} from 'src/core/shared/dto/Group/group_dto';
import { Group } from 'src/domain/entities/Group.entity';

export class GroupRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Group.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Group.findAll({ where: { deleted_at: null} });
    } catch (error: any) {
      return error;
    }
  }

  async create(group: any) {
    try {
      return Group.create(group);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, group: UpdateGroupDto) {
    try {
      return Group.update(group, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Group.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
