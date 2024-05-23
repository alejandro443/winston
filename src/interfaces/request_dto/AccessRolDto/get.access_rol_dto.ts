import { PickType } from '@nestjs/mapped-types';
import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class GetAccessRolRequestDto extends PickType(AccessRolDto, ['id'] as const) { }
