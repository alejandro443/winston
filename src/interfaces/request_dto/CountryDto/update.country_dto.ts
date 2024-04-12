import { CountryDto } from '@src/core/shared/dto/Country/country_dto';

export type UpdateCountryRequestDto = Omit<CountryDto, 'id, created_at'>;
