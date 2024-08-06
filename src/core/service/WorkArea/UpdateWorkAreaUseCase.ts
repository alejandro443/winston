import { UpdateWorkAreaDto } from 'src/core/shared/dto/WorkArea/work_area_dto';
import { WorkAreaService } from 'src/domain/services/WorkAreaService/WorkAreaService';

export class UpdateWorkAreaUseCase {
  constructor(private workAreaService?: WorkAreaService) {
    this.workAreaService = new WorkAreaService();
  }

  async updateWorkArea(id: number, workArea: UpdateWorkAreaDto) {
    try {
      const response: any = await this.workAreaService?.updateWorkArea(
        id,
        workArea,
      );
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
