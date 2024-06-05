import { PickType } from '@nestjs/mapped-types';
import { CompanyPositionDto } from '@src/core/shared/dto/CompanyPosition/company_position_dto';

export class GetCompanyPositionRequestDto extends PickType(CompanyPositionDto, ['code'] as const) { }