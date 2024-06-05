import { CompanyPositionService } from 'src/domain/services/CompanyPositionService/CompanyPositionService';

export class DeleteCompanyPositionUseCase {
  constructor(private companyPositionService?: CompanyPositionService) {
    this.companyPositionService = new CompanyPositionService();
  }

  async deleteCompanyPosition(code: string) {
    try {
      const response: any =
        await this.companyPositionService?.deleteCompanyPosition(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
