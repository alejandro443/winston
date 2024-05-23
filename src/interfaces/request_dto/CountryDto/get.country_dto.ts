import { CountryDto } from '@src/core/shared/dto/Country/country_dto';

export type GetCountryRequestDto = Pick<CountryDto, 'id'>;
