// import { NewAccessRolDto } from '@dto/AccessRol/new_access_rol_dto';

export interface AccessRolApplication {
  createAccessRol(newAccessRol: any): Promise<number>;
}
