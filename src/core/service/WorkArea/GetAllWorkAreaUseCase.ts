import { WorkAreaService } from 'src/domain/services/WorkAreaService/WorkAreaService';

export class GetAllWorkAreaUseCase {
  constructor(private workAreaService?: WorkAreaService) {
    this.workAreaService = new WorkAreaService();
  }

  async getAllWorkArea() {
    try {
      const response: any = await this.workAreaService?.getAllWorkArea();

      return response.map((workArea: any) => ({
        id: workArea.id,
        code: workArea.code,
        name: workArea.name,
        description: workArea.description,
        status: workArea.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
