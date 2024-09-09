import { PickType } from '@nestjs/swagger';
import { ListPriceDto } from '@src/core/shared/dto/ListPrice/list_price_dto';

export class GetRequestDto extends PickType(ListPriceDto, ['id'] as const) { }
