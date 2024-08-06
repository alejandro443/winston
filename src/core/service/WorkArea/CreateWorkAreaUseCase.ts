import { WorkAreaService } from 'src/domain/services/WorkAreaService/WorkAreaService';
import { NewWorkAreaDto } from 'src/core/shared/dto/WorkArea/work_area_dto';

export class CreateWorkAreaUseCase {
  constructor(private workAreaService?: WorkAreaService) {
    this.workAreaService = new WorkAreaService();
  }

  async createWorkArea(workArea: NewWorkAreaDto) {
    try {
      const response: any =
        await this.workAreaService?.createWorkArea(workArea);
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
