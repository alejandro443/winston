import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../../infraestructure/shared/enums/Roles';
import { ROLES_KEY } from '../../infraestructure/persistence/constants/keys_decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.getAllAndOverride<Roles>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!role) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if(user.role === Roles.ADMINISTRADOR) {
      return true;
    }

    return role === user.role;
  }
}
