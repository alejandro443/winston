import { OmitType } from '@nestjs/swagger';
import { SkuListDto } from '@src/core/shared/dto/SkuList/sku_list_dto';

export class CreateSkuListRequestDto extends
  OmitType(SkuListDto, ['id', 'created_at'] as const) { }