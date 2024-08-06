import { WorkAreaApplication } from 'src/core/application/WorkArea/WorkAreaApplication';
import {
  NewWorkAreaDto,
  UpdateWorkAreaDto,
} from 'src/core/shared/dto/WorkArea/work_area_dto';
import { GetOneWorkAreaUseCase } from './GetOneWorkAreaUseCase';
import { GetAllWorkAreaUseCase } from './GetAllWorkAreaUseCase';
import { CreateWorkAreaUseCase } from './CreateWorkAreaUseCase';
import { UpdateWorkAreaUseCase } from './UpdateWorkAreaUseCase';
import { DeleteWorkAreaUseCase } from './DeleteWorkAreaUseCase';

export class WorkAreaApplicationService implements WorkAreaApplication {
  constructor(
    private getOneUseCase?: GetOneWorkAreaUseCase,
    private getAllUseCase?: GetAllWorkAreaUseCase,
    private createUseCase?: CreateWorkAreaUseCase,
    private updateUseCase?: UpdateWorkAreaUseCase,
    private deleteUseCase?: DeleteWorkAreaUseCase,
  ) {
    this.getOneUseCase = new GetOneWorkAreaUseCase();
    this.getAllUseCase = new GetAllWorkAreaUseCase();
    this.createUseCase = new CreateWorkAreaUseCase();
    this.updateUseCase = new UpdateWorkAreaUseCase();
    this.deleteUseCase = new DeleteWorkAreaUseCase();
  }

  async getAllWorkArea() {
    try {
      return this.getAllUseCase?.getAllWorkArea();
    } catch (error: any) {
      return error;
    }
  }

  async getOneWorkArea(work_area_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneWorkArea(work_area_id);
    } catch (error: any) {
      return error;
    }
  }

  async createWorkArea(work_area: NewWorkAreaDto): Promise<any> {
    try {
      return this.createUseCase?.createWorkArea(work_area);
    } catch (error: any) {
      return error;
    }
  }

  async updateWorkArea(
    id: any,
    work_area: UpdateWorkAreaDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateWorkArea(id, work_area);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWorkArea(id: number) {
    try {
      return this.deleteUseCase?.deleteWorkArea(id);
    } catch (error: any) {
      return error;
    }
  }
}
