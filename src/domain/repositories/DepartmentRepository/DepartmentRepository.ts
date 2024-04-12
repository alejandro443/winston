import {
  NewDepartmentDto,
  UpdateDepartmentDto,
} from 'src/core/shared/dto/Department/department_dto';
import { Department } from 'src/domain/entities/Department.entity';

export class DepartmentRepository {
  constructor() {}

  async findAll() {
    try {
      return Department.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return Department.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async create(department: NewDepartmentDto) {
    try {
      return Department.create(department);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, department: UpdateDepartmentDto) {
    try {
      return Department.update(department, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Department.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
