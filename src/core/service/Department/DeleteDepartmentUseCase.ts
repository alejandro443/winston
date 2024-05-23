import { DepartmentService } from 'src/domain/services/DepartmentService/DepartmentService';

export class DeleteDepartmentUseCase {
  constructor(private departmentService?: DepartmentService) {
    this.departmentService = new DepartmentService();
  }

  async deleteDepartment(id: number) {
    try {
      const response = await this.departmentService?.deleteDepartment(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
