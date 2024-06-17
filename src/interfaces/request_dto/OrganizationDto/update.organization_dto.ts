import { OmitType } from '@nestjs/swagger';
import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';

export class UpdateOrganizationRequestDto extends
  OmitType(OrganizationDto, ['id'] as const) { }