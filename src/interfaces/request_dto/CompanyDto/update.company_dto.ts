import { OmitType } from '@nestjs/mapped-types';
import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class UpdateCompanyRequestDto extends
  OmitType(CompanyDto, ['id'] as const) { }