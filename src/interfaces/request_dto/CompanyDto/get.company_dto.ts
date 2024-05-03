import { PickType } from '@nestjs/mapped-types';
import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class GetCompanyRequestDto extends PickType(CompanyDto, ['id'] as const) { }
