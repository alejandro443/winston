import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';

export class GetOneOrganizationUseCase {
  constructor(private classificationService?: OrganizationService) {
    this.classificationService = new OrganizationService();
  }

  async getOneOrganization(id: number) {
    try {
      const response: any = await this.classificationService?.getOneOrganization(id);
      return {
        ...response,
      };
    } catch (error: any) {
      return error;
    }
  }
}
