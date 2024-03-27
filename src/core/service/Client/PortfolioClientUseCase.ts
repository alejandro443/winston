import { PortfolioService } from 'src/domain/services/ClientService/PortfolioService';

export class PortfolioClientUseCase {
  constructor(private portfolioService?: PortfolioService) {
    this.portfolioService = new PortfolioService();
  }

  async getPortfolioClient() {
    try {
      return this.portfolioService?.getAllPortfolio();
    } catch (error: any) {
      return error;
    }
  }
}
