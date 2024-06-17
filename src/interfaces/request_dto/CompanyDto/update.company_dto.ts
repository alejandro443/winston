import { OmitType } from '@nestjs/swagger';
import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class UpdateCompanyRequestDto extends
  OmitType(CompanyDto, ['id'] as const) { }