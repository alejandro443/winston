import { GroupService } from 'src/domain/services/GroupService/GroupService';

export class GetOneGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async getOneGroup(code: string) {
    try {
      const response = await this.groupService.getOneGroup(code);
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
