import {
  AllAccessRolDto,
  NewAccessRolDto,
  OneAccessRolDto,
  UpdateAccessRolDto,
} from 'src/core/shared/dto/AccessRol/access_rol_dto';

export interface AccessRolApplication {
  getAllAccessRol(): Promise<Array<AllAccessRolDto>>;
  getOneAccessRol(id: any): Promise<OneAccessRolDto>;
  createAccessRol(classification: NewAccessRolDto): Promise<OneAccessRolDto>;
  updateAccessRol(
    id: any,
    classification: UpdateAccessRolDto,
  ): Promise<OneAccessRolDto>;
  deleteAccessRol(id: any): any;
}
