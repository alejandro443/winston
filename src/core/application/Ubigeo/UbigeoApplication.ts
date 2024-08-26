import {
  UbigeoDto
} from 'src/core/shared/dto/Ubigeo/ubigeo_dto';

export interface UbigeoApplication {
  searchSensitive(searchTerm: string): Promise<Array<UbigeoDto>>;
}
