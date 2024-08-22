import { OmitType } from '@nestjs/swagger';
import { BusinessSubcategoryDto } from '@src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';

export class UpdateBusinessSubcategoryRequestDto extends
  OmitType(BusinessSubcategoryDto, ['id'] as const) { }