import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';

export class GetAllOrganizationUseCase {
  constructor(private organizationService?: OrganizationService) {
    this.organizationService = new OrganizationService();
  }

  async getAllOrganization() {
    try {
      const response: any =
        await this.organizationService?.getAllOrganization();

      return response.map((organization: any) => ({
        ...organization,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
