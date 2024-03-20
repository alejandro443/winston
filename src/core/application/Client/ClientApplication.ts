import {
  AllClientDto,
  NewClientDto,
  OneClientDto,
  UpdateClientDto,
} from '@dto/Client/client_dto';

export interface ClientApplication {
  getAllClient(): Promise<Array<AllClientDto>>;
  getOneClient(code: string): Promise<OneClientDto>;
  createClient(client: NewClientDto): Promise<OneClientDto>;
  updateClient(code: string, client: UpdateClientDto): Promise<OneClientDto>;
  deleteClient(code: string);
}
