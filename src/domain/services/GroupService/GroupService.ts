import { NewGroupDto } from 'src/core/shared/dto/Group/group_dto';
import { GroupRepository } from 'src/domain/repositories/GroupRepository/GroupRepository';

export class GroupService {
  constructor(private repository?: GroupRepository) {
    this.repository = new GroupRepository();
  }

  async getOneGroup(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllGroup() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createGroup(group: NewGroupDto) {
    try {
      return this.repository?.create(group);
    } catch (error: any) {
      return error;
    }
  }

  async updateGroup(code: any, group: NewGroupDto) {
    try {
      return this.repository?.update(code, group);
    } catch (error: any) {
      return error;
    }
  }

  async deleteGroup(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
