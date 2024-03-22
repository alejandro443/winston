import { AccessRolDto } from 'src/core/shared/dto/AccessRol/access_rol_dto';

export type UpdateAccessRolRequestDto = Omit<AccessRolDto, 'id'>;
