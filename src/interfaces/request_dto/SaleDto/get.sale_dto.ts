import { ApiProperty, PickType } from '@nestjs/swagger';
import { SaleDto } from '@src/core/shared/dto/Sale/sale_dto';
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';

export class GetSaleRequestDto extends PickType(SaleDto, ['id'] as const) { }

export class FiltersSalesRequestDto { 
  @ApiProperty({
    description: 'Termino de busqueda de cliente.',
    type: String,
  })
  @IsString()
  client?: string;

  @ApiProperty({
    description: 'Fecha de inicio.',
    type: Date,
  })
  @IsDate()
  startDate?: Date;

  @ApiProperty({
    description: 'Fecha de termino.',
    type: Date,
  })
  @IsDate()
  endDate?: Date;

  @ApiProperty({
    description: 'Estado de la cobranza.',
    type: String,
    enum: ['all', 'paid', 'pending']
  })
  @IsEnum(['all', 'paid', 'pending'])
  status?: string;
}
