import { OmitType } from '@nestjs/swagger';
import { SaleDto } from 'src/core/shared/dto/Sale/sale_dto';

export class CreateSaleRequestDto extends OmitType(SaleDto, ['id'] as const) { }