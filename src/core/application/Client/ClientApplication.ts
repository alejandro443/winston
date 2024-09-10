import { PortfolioDto } from '@src/core/shared/dto/Client/portfolio_dto';
import {
  AllClientDto,
  NewClientDto,
  OneClientDto,
  UpdateClientDto,
} from 'src/core/shared/dto/Client/client_dto';

export interface ClientApplication {
  getAllClient(): Promise<Array<AllClientDto>>;
  getOneClient(id: number): Promise<OneClientDto>;
  createClient(client: NewClientDto): Promise<OneClientDto>;
  updateClient(id: number, client: UpdateClientDto): Promise<OneClientDto>;
  deleteClient(id: number): any;

  getPortfolioClient(): Promise<Array<PortfolioDto>>;
  SearchByDocument(identification: any): any;
}
