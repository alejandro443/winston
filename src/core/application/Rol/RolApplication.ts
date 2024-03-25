import {
  AllRolDto,
  NewRolDto,
  OneRolDto,
  UpdateRolDto,
} from '@src/core/shared/dto/Rol/rol_dto';
export interface RolApplication {
  getAllRol(): Promise<Array<AllRolDto>>;
  getOneRol(id: any): Promise<OneRolDto>;
  createRol(rol: NewRolDto): Promise<OneRolDto>;
  updateRol(id: any, rol: UpdateRolDto): Promise<OneRolDto>;
  deleteRol(id: any): any;
}
