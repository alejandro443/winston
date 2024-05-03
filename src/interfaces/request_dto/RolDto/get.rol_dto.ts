import { PickType } from '@nestjs/mapped-types';
import { RolDto } from '@src/core/shared/dto/Rol/rol_dto';

export class GetRolRequestDto extends PickType(RolDto, ['id'] as const) { }