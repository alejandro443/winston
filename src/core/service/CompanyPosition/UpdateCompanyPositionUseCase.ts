import { UpdateCompanyPositionDto } from 'src/core/shared/dto/CompanyPosition/company_position_dto';
import { CompanyPositionService } from 'src/domain/services/CompanyPositionService/CompanyPositionService';

export class UpdateCompanyPositionUseCase {
  constructor(private company_positionService?: CompanyPositionService) {
    this.company_positionService = new CompanyPositionService();
  }

  async updateCompanyPosition(code: any, company_position: UpdateCompanyPositionDto) {
    try {
      const response: any = await this.company_positionService?.updateCompanyPosition(
        code,
        company_position,
      );
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
