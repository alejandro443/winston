import { CountryDto } from '@src/core/shared/dto/Country/country_dto';

export class CreateCountryRequestDto
  extends CountryDto
  implements Omit<CountryDto, 'id, created_at'> {}
