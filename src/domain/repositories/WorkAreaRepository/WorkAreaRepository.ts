import {
  NewWorkAreaDto,
  UpdateWorkAreaDto,
} from 'src/core/shared/dto/WorkArea/work_area_dto';
import { WorkArea } from 'src/domain/entities/WorkArea.entity';

export class WorkAreaRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return WorkArea.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return WorkArea.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(work_area: NewWorkAreaDto) {
    try {
      return WorkArea.create(work_area);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, work_area: UpdateWorkAreaDto) {
    try {
      return WorkArea.update(work_area, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return WorkArea.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
