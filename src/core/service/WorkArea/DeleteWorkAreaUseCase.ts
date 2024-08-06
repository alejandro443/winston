import { WorkAreaService } from 'src/domain/services/WorkAreaService/WorkAreaService';

export class DeleteWorkAreaUseCase {
  constructor(private workAreaService?: WorkAreaService) {
    this.workAreaService = new WorkAreaService();
  }

  async deleteWorkArea(id: number) {
    try {
      const response: any =
        await this.workAreaService?.deleteWorkArea(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
