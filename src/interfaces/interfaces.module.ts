import { Module } from '@nestjs/common';
import { RootController } from './controllers/root_controller';
import { RolController } from './controllers/rol_controller';
import { ClassificationController } from './controllers/classification_controller';
import { UserController } from './controllers/user_controller';
import { AuthController } from './controllers/auth_controller';
import { ClientController } from './controllers/client_controller';
import { GroupController } from './controllers/group_controller';
import { TypeClientController } from './controllers/type_client_controller';
import { TypeDocumentController } from './controllers/type_document_controller';
import { TypeWorkerController } from './controllers/type_worker_controller';
import { WorkerController } from './controllers/worker_controller';
import { PersonController } from './controllers/person_controller';
import { OrganizationController } from './controllers/organization_controller';
import { AccessController } from './controllers/access_controller';
import { AccessRolController } from './controllers/access_rol_controller';

@Module({
  controllers: [
    RootController,
    AuthController,
    RolController,
    ClassificationController,
    UserController,
    ClientController,
    GroupController,
    TypeClientController,
    TypeDocumentController,
    TypeWorkerController,
    WorkerController,
    PersonController,
    OrganizationController,
    AccessController,
    AccessRolController,
  ],
})
export class InterfacesModule {}
