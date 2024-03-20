import { AccessRolDto } from '@dto/AccessRol/access_rol_dto';

export class CreateAccessRolRequestDto
  extends AccessRolDto
  implements Omit<AccessRolDto, 'id'> {}
