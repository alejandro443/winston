import { GroupService } from 'src/domain/services/GroupService/GroupService';

export class DeleteGroupUseCase {
  constructor(private groupService?: GroupService) {
    this.groupService = new GroupService();
  }

  async deleteGroup(code: string) {
    try {
      const response: any = await this.groupService?.deleteGroup(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
