import { OrganizationApplication } from 'src/core/application/Organization/OrganizationApplication';
import {
  NewOrganizationDto,
  UpdateOrganizationDto,
} from 'src/core/shared/dto/Organization/organization_dto';
import { GetOneOrganizationUseCase } from './GetOneOrganizationUseCase';
import { GetAllOrganizationUseCase } from './GetAllOrganizationUseCase';
import { CreateOrganizationUseCase } from './CreateOrganizationUseCase';
import { UpdateOrganizationUseCase } from './UpdateOrganizationUseCase';
import { DeleteOrganizationUseCase } from './DeleteOrganizationUseCase';

export class OrganizationApplicationService implements OrganizationApplication {
  constructor(
    private getOneUseCase?: GetOneOrganizationUseCase,
    private getAllUseCase?: GetAllOrganizationUseCase,
    private createUseCase?: CreateOrganizationUseCase,
    private updateUseCase?: UpdateOrganizationUseCase,
    private deleteUseCase?: DeleteOrganizationUseCase,
  ) {
    this.getOneUseCase = new GetOneOrganizationUseCase();
    this.getAllUseCase = new GetAllOrganizationUseCase();
    this.createUseCase = new CreateOrganizationUseCase();
    this.updateUseCase = new UpdateOrganizationUseCase();
    this.deleteUseCase = new DeleteOrganizationUseCase();
  }

  async getAllOrganization() {
    try {
      return this.getAllUseCase?.getAllOrganization();
    } catch (error: any) {
      return error;
    }
  }

  async getOneOrganization(organization_id: number) {
    try {
      return this.getOneUseCase?.getOneOrganization(organization_id);
    } catch (error: any) {
      return error;
    }
  }

  async createOrganization(organization: NewOrganizationDto) {
    try {
      return this.createUseCase?.createOrganization(organization);
    } catch (error: any) {
      return error;
    }
  }

  async updateOrganization(id: number, organization: UpdateOrganizationDto) {
    try {
      return this.updateUseCase?.updateOrganization(id, organization);
    } catch (error: any) {
      return error;
    }
  }

  async deleteOrganization(id: number) {
    try {
      return this.deleteUseCase?.deleteOrganization(id);
    } catch (error: any) {
      return error;
    }
  }
}
