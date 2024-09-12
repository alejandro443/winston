import { ApiProperty, PickType } from '@nestjs/swagger';
import { ListPriceDto } from '@src/core/shared/dto/ListPrice/list_price_dto';
import { IsString } from 'class-validator';

export class GetRequestDto extends PickType(ListPriceDto, ['id'] as const) { }

export class GetRequestActivesDto {
  @ApiProperty({
    description: 'Tipo de busqueda: count | complete',
    type: String,
  })
  @IsString()
  type?: string;
}
