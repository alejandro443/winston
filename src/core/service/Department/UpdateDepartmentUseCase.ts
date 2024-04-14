import { UpdateDepartmentDto } from 'src/core/shared/dto/Department/department_dto';
import { DepartmentService } from 'src/domain/services/DepartmentService/DepartmentService';

export class UpdateDepartmentUseCase {
  constructor(private departmentService?: DepartmentService) {
    this.departmentService = new DepartmentService();
  }

  async updateDepartment(id: number, department: UpdateDepartmentDto) {
    try {
      const response = await this.departmentService?.updateDepartment(
        id,
        department,
      );
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
