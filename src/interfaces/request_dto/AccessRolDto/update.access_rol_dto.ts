import { OmitType } from '@nestjs/mapped-types';
import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class UpdateAccessRolRequestDto extends
  OmitType(AccessRolDto, ['id'] as const) { }