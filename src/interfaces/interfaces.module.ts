import { Module } from '@nestjs/common';
import { RootController } from './controllers/root_controller';
import { RolController } from './controllers/rol_controller';
import { ClassificationController } from './controllers/classification_controller';
import { UserController } from './controllers/user_controller';
import { AuthController } from './controllers/auth_controller';

@Module({
  controllers: [
    RootController,
    AuthController,
    RolController, 
    ClassificationController,
    UserController
  ],
})
export class InterfacesModule {}
