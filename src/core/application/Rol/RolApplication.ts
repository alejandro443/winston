import { NewRolDto } from "src/core/shared/dto/Rol/new_rol_dto";

export interface RolApplication {
  createRol(newRol: NewRolDto): Promise<number>
}