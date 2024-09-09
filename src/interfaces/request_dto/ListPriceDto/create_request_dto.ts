import { OmitType } from '@nestjs/swagger';
import { ListPriceDto } from 'src/core/shared/dto/ListPrice/list_price_dto';

  export class CreateRequestDto extends
  OmitType(ListPriceDto, ['id'] as const) { }