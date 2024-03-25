import { GroupService } from 'src/domain/services/GroupService/GroupService';

export class GetAllGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async getAllGroup() {
    try {
      const response: any = await this.groupService?.getAllGroup();

      return response.map((group: any) => ({
        id: group.id,
        code: group.code,
        name: group.name,
        description: group.description,
        status: group.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
