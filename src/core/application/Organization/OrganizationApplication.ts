import {
  AllOrganizationDto,
  NewOrganizationDto,
  OneOrganizationDto,
  UpdateOrganizationDto,
} from 'src/core/shared/dto/Organization/organization_dto';

export interface OrganizationApplication {
  getAllOrganization(): Promise<Array<AllOrganizationDto>>;
  getOneOrganization(id: any): Promise<OneOrganizationDto>;
  createOrganization(
    organization: NewOrganizationDto,
  ): Promise<OneOrganizationDto>;
  updateOrganization(
    id: any,
    organization: UpdateOrganizationDto,
  ): Promise<OneOrganizationDto>;
  deleteOrganization(id: any): any;
}
