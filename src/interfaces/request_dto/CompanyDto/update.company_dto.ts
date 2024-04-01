import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export type UpdateCompanyRequestDto = Omit<CompanyDto, 'id'>;
