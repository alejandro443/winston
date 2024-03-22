import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export class CreateAccessRolRequestDto
  extends AccessRolDto
  implements Omit<AccessRolDto, 'id, created_at'> {}
