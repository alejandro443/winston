import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export class CreateOrganizationRequestDto
  extends OrganizationDto
  implements Omit<OrganizationDto, 'id, created_at'> {}
