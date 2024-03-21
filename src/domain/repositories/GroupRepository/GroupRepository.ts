import {
  NewGroupDto,
  UpdateGroupDto,
} from '@dto/Group/group_dto';
import { Group } from 'src/domain/entities/Group.entity';

export class GroupRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Group.findOne({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Group.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(group: NewGroupDto) {
    try {
      return Group.create(group);
    } catch (error) {
      return error;
    }
  }

  async update(code: string, group: UpdateGroupDto) {
    try {
      return Group.update(group, { where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Group.destroy({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }
}
