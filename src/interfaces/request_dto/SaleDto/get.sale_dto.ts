import { PickType } from '@nestjs/swagger';
import { SaleDto } from '@src/core/shared/dto/Sale/sale_dto';

export class GetSaleRequestDto extends PickType(SaleDto, ['id'] as const) { }
