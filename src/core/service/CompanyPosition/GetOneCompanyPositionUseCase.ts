import { CompanyPositionService } from 'src/domain/services/CompanyPositionService/CompanyPositionService';

export class GetOneCompanyPositionUseCase {
  constructor(private companyPositionService?: CompanyPositionService) {
    this.companyPositionService = new CompanyPositionService();
  }

  async getOneCompanyPosition(code: string) {
    try {
      const response: any =
        await this.companyPositionService?.getOneCompanyPosition(code);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
