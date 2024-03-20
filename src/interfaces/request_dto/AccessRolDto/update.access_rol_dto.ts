import { AccessRolDto } from '@dto/AccessRol/access_rol_dto';

export type UpdateAccessRolRequestDto = Omit<AccessRolDto, 'id'>;
