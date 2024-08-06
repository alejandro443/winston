import { NewWorkAreaDto } from 'src/core/shared/dto/WorkArea/work_area_dto';
import { WorkAreaRepository } from 'src/domain/repositories/WorkAreaRepository/WorkAreaRepository';

export class WorkAreaService {
  constructor(private repository?: WorkAreaRepository) {
    this.repository = new WorkAreaRepository();
  }

  async getOneWorkArea(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllWorkArea() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createWorkArea(work_area: NewWorkAreaDto) {
    try {
      return this.repository?.create(work_area);
    } catch (error: any) {
      return error;
    }
  }

  async updateWorkArea(id: any, work_area: NewWorkAreaDto) {
    try {
      return this.repository?.update(id, work_area);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWorkArea(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
