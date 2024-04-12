import { DepartmentApplication } from 'src/core/application/Department/DepartmentApplication';
import {
  NewDepartmentDto,
  UpdateDepartmentDto,
} from 'src/core/shared/dto/Department/department_dto';
import { GetOneDepartmentUseCase } from './GetOneDepartmentUseCase';
import { GetAllDepartmentUseCase } from './GetAllDepartmentUseCase';
import { CreateDepartmentUseCase } from './CreateDepartmentUseCase';
import { UpdateDepartmentUseCase } from './UpdateDepartmentUseCase';
import { DeleteDepartmentUseCase } from './DeleteDepartmentUseCase';

export class DepartmentApplicationService implements DepartmentApplication {
  constructor(
    private getAllUseCase?: GetAllDepartmentUseCase,
    private getOneUseCase?: GetOneDepartmentUseCase,
    private createUseCase?: CreateDepartmentUseCase,
    private updateUseCase?: UpdateDepartmentUseCase,
    private deleteUseCase?: DeleteDepartmentUseCase,
  ) {
    this.getAllUseCase = new GetAllDepartmentUseCase();
    this.getOneUseCase = new GetOneDepartmentUseCase();
    this.createUseCase = new CreateDepartmentUseCase();
    this.updateUseCase = new UpdateDepartmentUseCase();
    this.deleteUseCase = new DeleteDepartmentUseCase();
  }

  async getAllDepartment() {
    try {
      return this.getAllUseCase?.getAllDepartment();
    } catch (error: any) {
      return error;
    }
  }

  async getOneDepartment(department_id: number) {
    try {
      return this.getOneUseCase?.getOneDepartment(department_id);
    } catch (error: any) {
      return error;
    }
  }

  async createDepartment(department: NewDepartmentDto) {
    try {
      return this.createUseCase?.createDepartment(department);
    } catch (error: any) {
      return error;
    }
  }

  async updateDepartment(id: number, department: UpdateDepartmentDto) {
    try {
      return this.updateUseCase?.updateDepartment(id, department);
    } catch (error: any) {
      return error;
    }
  }

  async deleteDepartment(id: number) {
    try {
      return this.deleteUseCase?.deleteDepartment(id);
    } catch (error: any) {
      return error;
    }
  }
}
