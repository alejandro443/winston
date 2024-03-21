import { RolDto } from '@src/core/shared/dto/Rol/rol_dto';

export type UpdateRolRequestDto = Omit<RolDto, 'id, created_at'>;
