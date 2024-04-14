import { DepartmentDto } from '@src/core/shared/dto/Department/department_dto';

export type GetDepartmentRequestDto = Pick<DepartmentDto, 'id'>;
