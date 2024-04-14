import { ApiProperty } from '@nestjs/swagger';
import { CountryDto } from '@src/core/shared/dto/Country/country_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class CountryResponse extends AppResponse {
  @ApiProperty({
    type: CountryDto,
    nullable: true,
  })
  data?: object;
}

export class CountriesResponse extends AppResponse {
  @ApiProperty({
    type: [CountryDto],
    nullable: true,
  })
  data?: CountryDto[];
}
