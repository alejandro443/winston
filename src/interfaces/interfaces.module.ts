import { Module } from '@nestjs/common';
import { RootController } from './controllers/root_controller';
import { RolController } from './controllers/rol_controller';
import { ClassificationController } from './controllers/classification_controller';

@Module({
  controllers: [RootController, RolController, ClassificationController],
})
export class InterfacesModule {}
