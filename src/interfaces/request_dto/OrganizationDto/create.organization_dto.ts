import { OmitType } from '@nestjs/mapped-types';
import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export class CreateOrganizationRequestDto extends
  OmitType(OrganizationDto, ['id', 'created_at'] as const) { }