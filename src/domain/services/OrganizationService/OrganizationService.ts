import { NewOrganizationDto } from 'src/core/shared/dto/Organization/organization_dto';
import { OrganizationRepository } from 'src/domain/repositories/OrganizationRepository/OrganizationRepository';

export class OrganizationService {
  constructor(private repository?: OrganizationRepository) {
    this.repository = new OrganizationRepository();
  }

  async getOneOrganization(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllOrganization() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createOrganization(organization: NewOrganizationDto) {
    try {
      return this.repository?.create(organization);
    } catch (error: any) {
      return error;
    }
  }

  async updateOrganization(id: number, organization: NewOrganizationDto) {
    try {
      return this.repository?.update(id, organization);
    } catch (error: any) {
      return error;
    }
  }

  async deleteOrganization(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
