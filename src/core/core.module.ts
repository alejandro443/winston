import { DynamicModule, Module, Type } from '@nestjs/common';
import {
  AUTH_APPLICATION,
  USER_APPLICATION,
  CLASSIFICATION_APPLICATION,
  ROL_APPLICATION,
} from './shared/constants/application.constants';
import { RolApplicationService } from './service/Rol/RolApplicationService';
import { ClassificationApplicationService } from './service/Classification/ClassificationApplicationService';
import { UserApplicationService } from './service/User/UserApplicationService';
import { AuthApplicationService } from './service/Auth/AuthApplicationService';

export type CoreModuleOptions = {
  modules: Type[];
  adapters?: Record<string, never>;
};

@Module({})
export class CoreModule {
  static register({ modules }: CoreModuleOptions): DynamicModule {
    const AuthenticationApplicationProvider = {
      provide: AUTH_APPLICATION,
      useFactory() {
        return new AuthApplicationService();
      },
      inject: [],
    };

    const UserApplicationProvider = {
      provide: USER_APPLICATION,
      useFactory() {
        return new UserApplicationService();
      },
      inject: [],
    };

    const RolApplicationProvider = {
      provide: ROL_APPLICATION,
      useFactory() {
        return new RolApplicationService();
      },
      inject: [],
    };

    const ClassificationApplicationProvider = {
      provide: CLASSIFICATION_APPLICATION,
      useFactory() {
        return new ClassificationApplicationService();
      },
      inject: [],
    };

    return {
      module: CoreModule,
      global: true,
      imports: [...modules],
      providers: [
        AuthenticationApplicationProvider,
        UserApplicationProvider,
        RolApplicationProvider, 
        ClassificationApplicationProvider
      ],
      exports: [
        AUTH_APPLICATION, 
        USER_APPLICATION, 
        ROL_APPLICATION, 
        CLASSIFICATION_APPLICATION
      ],
    };
  }
}
