import { DepartmentService } from 'src/domain/services/DepartmentService/DepartmentService';

export class GetAllDepartmentUseCase {
  constructor(private departmentService?: DepartmentService) {
    this.departmentService = new DepartmentService();
  }

  async getAllDepartment() {
    try {
      const response = await this.departmentService?.getAllDepartment();
      return response.map((department: any) => ({
        id: department.id,
        name: department.name,
        cod_ubigeo: department.cod_ubigeo,
        country_id: department.country_id,
        active: department.active,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
