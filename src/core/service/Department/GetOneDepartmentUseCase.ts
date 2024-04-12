import { DepartmentService } from 'src/domain/services/DepartmentService/DepartmentService';

export class GetOneDepartmentUseCase {
  constructor(private departmentService?: DepartmentService) {
    this.departmentService = new DepartmentService();
  }

  async getOneDepartment(id: number) {
    try {
      const response = await this.departmentService?.getOneDepartment(id);
      return {
        id: response.id,
        name: response.name,
        cod_ubigeo: response.cod_ubigeo,
        country_id: response.country_id,
        active: response.active,
      };
    } catch (error: any) {
      return error;
    }
  }
}
