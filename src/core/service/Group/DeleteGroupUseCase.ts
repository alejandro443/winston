import { GroupService } from 'src/domain/services/GroupService/GroupService';

export class DeleteGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async deleteGroup(code: string) {
    try {
      const response = await this.groupService.deleteGroup(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
