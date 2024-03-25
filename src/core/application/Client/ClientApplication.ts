import {
  AllClientDto,
  NewClientDto,
  OneClientDto,
  UpdateClientDto,
} from 'src/core/shared/dto/Client/client_dto';

export interface ClientApplication {
  getAllClient(): Promise<Array<AllClientDto>>;
  getOneClient(code: any): Promise<OneClientDto>;
  createClient(client: NewClientDto): Promise<OneClientDto>;
  updateClient(code: any, client: UpdateClientDto): Promise<OneClientDto>;
  deleteClient(code: any): any;
}
