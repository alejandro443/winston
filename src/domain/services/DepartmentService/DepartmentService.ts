import { DepartmentApplicationError } from '@src/core/shared/error/DepartmentApplicationError';
import { NewDepartmentDto } from 'src/core/shared/dto/Department/department_dto';
import { DepartmentRepository } from 'src/domain/repositories/DepartmentRepository/DepartmentRepository';

export class DepartmentService {
  constructor(private repository?: DepartmentRepository) {
    this.repository = new DepartmentRepository();
  }

  async getAllDepartment() {
    try {
      return this.repository.findAll();
    } catch (error: any) {
      throw new DepartmentApplicationError(error.message);
    }
  }

  async getOneDepartment(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error: any) {
      throw new DepartmentApplicationError(error.message);
    }
  }

  async createDepartment(department: NewDepartmentDto) {
    try {
      return this.repository.create(department);
    } catch (error: any) {
      throw new DepartmentApplicationError(error.message);
    }
  }

  async updateDepartment(id: number, department: NewDepartmentDto) {
    try {
      return this.repository.update(id, department);
    } catch (error: any) {
      throw new DepartmentApplicationError(error.message);
    }
  }

  async deleteDepartment(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error: any) {
      throw new DepartmentApplicationError(error.message);
    }
  }
}
