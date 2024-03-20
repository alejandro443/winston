import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export type GetOrganizationRequestDto = Pick<OrganizationDto, 'id'>;
