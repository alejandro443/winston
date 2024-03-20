import { GroupService } from 'src/domain/services/GroupService/GroupService';
import { NewGroupDto } from '@dto/Group/group_dto';

export class CreateGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async createGroup(group: NewGroupDto) {
    try {
      const response = await this.groupService.createGroup(group);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error) {
      return error;
    }
  }
}
