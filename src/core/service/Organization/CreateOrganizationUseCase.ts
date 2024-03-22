import { OrganizationService } from 'src/domain/services/OrganizationService/OrganizationService';
import { NewOrganizationDto } from 'src/core/shared/dto/Organization/organization_dto';

export class CreateOrganizationUseCase {
  constructor(private organizationService?: OrganizationService) {
    this.organizationService = new OrganizationService();
  }

  async createOrganization(organization: NewOrganizationDto) {
    try {
      const response =
        await this.organizationService.createOrganization(organization);
      return {
        ...response,
      };
    } catch (error) {
      return error;
    }
  }
}
