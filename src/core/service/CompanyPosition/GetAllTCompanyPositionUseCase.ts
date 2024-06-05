import { CompanyPositionService } from 'src/domain/services/CompanyPositionService/CompanyPositionService';

export class GetAllCompanyPositionUseCase {
  constructor(private companyPositionService?: CompanyPositionService) {
    this.companyPositionService = new CompanyPositionService();
  }

  async getAllCompanyPosition() {
    try {
      const response: any = await this.companyPositionService?.getAllCompanyPosition();

      return response.map((companyPosition: any) => ({
        id: companyPosition.id,
        code: companyPosition.code,
        name: companyPosition.name,
        description: companyPosition.description,
        status: companyPosition.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
