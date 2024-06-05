import { CompanyPositionService } from 'src/domain/services/CompanyPositionService/CompanyPositionService';
import { NewCompanyPositionDto } from 'src/core/shared/dto/CompanyPosition/company_position_dto';

export class CreateCompanyPositionUseCase {
  constructor(private companyPositionService?: CompanyPositionService) {
    this.companyPositionService = new CompanyPositionService();
  }

  async createCompanyPosition(companyPosition: NewCompanyPositionDto) {
    try {
      const response: any =
        await this.companyPositionService?.createCompanyPosition(companyPosition);
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
