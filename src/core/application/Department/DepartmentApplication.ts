import {
  AllDepartmentDto,
  NewDepartmentDto,
  OneDepartmentDto,
  UpdateDepartmentDto,
} from 'src/core/shared/dto/Department/department_dto';

export interface DepartmentApplication {
  getAllDepartment(): Promise<Array<AllDepartmentDto>>;
  getOneDepartment(id: number): Promise<OneDepartmentDto>;
  createDepartment(department: NewDepartmentDto): Promise<OneDepartmentDto>;
  updateDepartment(
    id: number,
    department: UpdateDepartmentDto,
  ): Promise<OneDepartmentDto>;
  deleteDepartment(id: number);
}
