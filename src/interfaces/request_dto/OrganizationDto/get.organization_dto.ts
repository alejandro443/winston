import { PickType } from '@nestjs/mapped-types';
import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export class GetOrganizationRequestDto extends PickType(OrganizationDto, ['id'] as const) { }
