import { PickType } from '@nestjs/swagger';
import { CompanyDto } from '@src/core/shared/dto/Company/company_dto';

export class GetCompanyRequestDto extends PickType(CompanyDto, ['id'] as const) { }
