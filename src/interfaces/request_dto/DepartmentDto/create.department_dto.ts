import { DepartmentDto } from '@src/core/shared/dto/Department/department_dto';

export class CreateDepartmentRequestDto
  extends DepartmentDto
  implements Omit<DepartmentDto, 'id, created_at'> {}
