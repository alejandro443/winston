import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class CreateCompanyRequestDto
  extends CompanyDto
  implements Omit<CompanyDto, 'id, created_at'> {}
