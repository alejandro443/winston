import { DepartmentDto } from '@src/core/shared/dto/Department/department_dto';

export type UpdateDepartmentRequestDto = Omit<DepartmentDto, 'id, created_at'>;
