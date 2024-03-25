import { UpdateGroupDto } from 'src/core/shared/dto/Group/group_dto';
import { GroupService } from 'src/domain/services/GroupService/GroupService';

export class UpdateGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async updateGroup(code: any, group: UpdateGroupDto) {
    try {
      const response: any = await this.groupService?.updateGroup(code, group);
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
