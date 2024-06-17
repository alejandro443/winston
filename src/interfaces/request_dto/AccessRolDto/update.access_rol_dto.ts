import { OmitType } from '@nestjs/swagger';
import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class UpdateAccessRolRequestDto extends
  OmitType(AccessRolDto, ['id'] as const) { }