import { NewAccessRolDto } from "src/core/shared/dto/AccessRol/new_access_rol_dto";

export interface AccessRolApplication {
  createAccessRol(newAccessRol: NewAccessRolDto): Promise<number>
}