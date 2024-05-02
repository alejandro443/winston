import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '@src/infraestructure/persistence/constants/keys_decorators';
import { Roles } from '@src/infraestructure/shared/enums/Roles';

export const Role = (roles: Roles) => SetMetadata(ROLES_KEY, roles);
