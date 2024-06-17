import { OmitType } from '@nestjs/swagger';
import { RolDto } from '@src/core/shared/dto/Rol/rol_dto';

  export class CreateRolRequestDto extends
  OmitType(RolDto, ['id', 'created_at'] as const) { }