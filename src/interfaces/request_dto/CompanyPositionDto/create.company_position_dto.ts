import { OmitType } from '@nestjs/swagger';
import { CompanyPositionDto } from '@src/core/shared/dto/CompanyPosition/company_position_dto';

export class CreateCompanyPositionRequestDto extends
  OmitType(CompanyPositionDto, ['id', 'created_at'] as const) { }