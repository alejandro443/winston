import { RolDto } from '@src/core/shared/dto/Rol/rol_dto';

export class CreateRolRequestDto
  extends RolDto
  implements Omit<RolDto, 'id, created_at'> {}