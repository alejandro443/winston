import { DepartmentService } from 'src/domain/services/DepartmentService/DepartmentService';
import { NewDepartmentDto } from 'src/core/shared/dto/Department/department_dto';

export class CreateDepartmentUseCase {
  constructor(private departmentService?: DepartmentService) {
    this.departmentService = new DepartmentService();
  }

  async createDepartment(department: NewDepartmentDto) {
    try {
      const response =
        await this.departmentService?.createDepartment(department);
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
