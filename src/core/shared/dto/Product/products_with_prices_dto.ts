import { ApiProperty, PickType } from "@nestjs/swagger";
import { ProductDto } from "./product_dto";
import { IsNumber, IsString } from "class-validator";

export class ProductsWithPricesDto extends PickType(ProductDto, ['id', 'name', 'description', 'sku', 'image', 'product_brand_id'] as const){
  @ApiProperty({
    description: 'Nombre de la categoria del producto.',
    type: String
  })
  @IsString()
  declare product_brand_name?: string;

  @ApiProperty({
    description: 'Id de la lista de precio.',
    type: Number,
  })
  list_price_id?: number;

  @ApiProperty({
    description: 'Precio unitario.',
    type: Number,
  })
  @IsNumber()
  unit_price?: number;
  
  @ApiProperty({
    description: 'Precio por paquete.',
    type: Number,
  })
  @IsNumber()
  package_price?: number;
}