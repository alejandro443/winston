import { DynamicModule, Module, Type } from '@nestjs/common';
import { ROL_APPLICATION } from './shared/constants/application.constants';
import { RolApplicationService } from './service/Rol/RolApplicationService';

/**
 * Options for core module 
 */
export type CoreModuleOptions = {
  modules: Type[];
  adapters?: {}
}

@Module({})
export class CoreModule {

  static register({ modules, adapters }: CoreModuleOptions): DynamicModule {

    const RolApplicationProvider = {
      provide: ROL_APPLICATION,
      useFactory() {
        return new RolApplicationService()
      },
      inject: []
    }

    return {
      module: CoreModule,
      global: true,
      imports: [
        ...modules
      ],
      providers: [
        RolApplicationProvider
      ],
      exports: [
        ROL_APPLICATION
      ],
    }
  }

}

