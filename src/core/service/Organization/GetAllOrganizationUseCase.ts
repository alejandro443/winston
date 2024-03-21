import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';

export class GetAllOrganizationUseCase {
  constructor(private organizationService?: OrganizationService) {
    this.organizationService = new OrganizationService();
  }

  async getAllOrganization() {
    try {
      const response = await this.organizationService.getAllOrganization();

      return response.map((organization) => ({
        ...organization
      }));
    } catch (error) {
      return error;
    }
  }
}
