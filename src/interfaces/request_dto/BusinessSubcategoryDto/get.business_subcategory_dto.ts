import { PickType } from '@nestjs/swagger';
import { BusinessSubcategoryDto } from '@src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';

export class GetBusinessSubcategoryRequestDto extends PickType(BusinessSubcategoryDto, ['id'] as const) { }
