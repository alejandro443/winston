import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';

export class DeleteOrganizationUseCase {
  constructor(private organizationService?: OrganizationService) {
    this.organizationService = new OrganizationService();
  }

  async deleteOrganization(id: number) {
    try {
      const response =
        await this.organizationService.deleteOrganization(id);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}