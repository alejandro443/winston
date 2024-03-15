import {
  AllOrganizationDto,
  NewOrganizationDto,
  OneOrganizationDto,
  UpdateOrganizationDto,
} from 'src/core/shared/dto/Organization/organization_dto';

export interface OrganizationApplication {
  getAllOrganization(): Promise<Array<AllOrganizationDto>>;
  getOneOrganization(id: number): Promise<OneOrganizationDto>;
  createOrganization(
    organization: NewOrganizationDto,
  ): Promise<OneOrganizationDto>;
  updateOrganization(
    id: number,
    organization: UpdateOrganizationDto,
  ): Promise<OneOrganizationDto>;
  deleteOrganization(id: number);
}
