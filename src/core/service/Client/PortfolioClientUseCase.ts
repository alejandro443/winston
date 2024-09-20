import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { PortfolioService } from 'src/domain/services/ClientService/PortfolioService';

export class PortfolioClientUseCase {
  constructor(private portfolioService?: PortfolioService) {
    this.portfolioService = new PortfolioService();
  }

  async getPortfolioClient() {
    try {
      var portfolio: any = await this.portfolioService?.getAllPortfolio();
      return portfolio
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }
}
