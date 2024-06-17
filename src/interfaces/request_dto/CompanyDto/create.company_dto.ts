import { OmitType } from '@nestjs/swagger';
import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class CreateCompanyRequestDto extends
  OmitType(CompanyDto, ['id', 'created_at'] as const) { }