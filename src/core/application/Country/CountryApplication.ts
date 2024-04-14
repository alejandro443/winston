import {
  AllCountryDto,
  NewCountryDto,
  OneCountryDto,
  UpdateCountryDto,
} from 'src/core/shared/dto/Country/country_dto';

export interface CountryApplication {
  getAllCountry(): Promise<Array<AllCountryDto>>;
  getOneCountry(id: number): Promise<OneCountryDto>;
  createCountry(country: NewCountryDto): Promise<OneCountryDto>;
  updateCountry(id: number, country: UpdateCountryDto): Promise<OneCountryDto>;
  deleteCountry(id: number);
}
