import { WorkAreaService } from 'src/domain/services/WorkAreaService/WorkAreaService';

export class GetOneWorkAreaUseCase {
  constructor(private workAreaService?: WorkAreaService) {
    this.workAreaService = new WorkAreaService();
  }

  async getOneWorkArea(id: number) {
    try {
      const response: any =
        await this.workAreaService?.getOneWorkArea(id);
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
