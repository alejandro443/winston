import { PickType } from '@nestjs/swagger';
import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class GetAccessRolRequestDto extends PickType(AccessRolDto, ['id'] as const) { }
