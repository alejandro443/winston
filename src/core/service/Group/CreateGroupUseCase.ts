import { GroupService } from 'src/domain/services/GroupService/GroupService';
import { NewGroupDto } from 'src/core/shared/dto/Group/group_dto';

export class CreateGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async createGroup(group: NewGroupDto) {
    try {
      const response: any = await this.groupService?.createGroup(group);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
