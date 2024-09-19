import {
  UbigeoDto
} from 'src/core/shared/dto/Ubigeo/ubigeo_dto';

export interface PaymentScheduleApplication {
  schedule_simulation(searchTerm: string): Promise<Array<UbigeoDto>>;
}
