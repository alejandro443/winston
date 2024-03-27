import { PortfolioDto } from '@src/core/shared/dto/Client/portfolio_dto';

export interface PortfolioApplication {
  getPortfolioClient(): Promise<Array<PortfolioDto>>;
}
