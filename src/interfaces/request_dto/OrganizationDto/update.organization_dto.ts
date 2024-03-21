import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export type UpdateOrganizationRequestDto = Omit<OrganizationDto, 'id'>;
