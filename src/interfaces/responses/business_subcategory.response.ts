import { ApiProperty } from '@nestjs/swagger';
import { BusinessSubcategoryDto } from '@src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class BusinessSubcategoryResponse extends AppResponse {
  @ApiProperty({
    type: BusinessSubcategoryDto,
    nullable: true,
  })
  data?: object;
}

export class BusinessSubcategorysResponse extends AppResponse {
  @ApiProperty({
    type: [BusinessSubcategoryDto],
    nullable: true,
  })
  data?: BusinessSubcategoryDto[];
}
