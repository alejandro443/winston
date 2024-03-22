import { UpdateOrganizationDto } from 'src/core/shared/dto/Organization/organization_dto';
import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';

export class UpdateOrganizationUseCase {
  constructor(private organizationService?: OrganizationService) {
    this.organizationService = new OrganizationService();
  }

  async updateOrganization(id: number, organization: UpdateOrganizationDto) {
    try {
      const response = await this.organizationService.updateOrganization(
        id,
        organization,
      );
      return {
        ...response,
      };
    } catch (error) {
      return error;
    }
  }
}
