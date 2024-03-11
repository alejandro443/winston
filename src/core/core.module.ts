import { DynamicModule, Module, Type } from '@nestjs/common';
import { CLASSIFICATION_APPLICATION, ROL_APPLICATION } from './shared/constants/application.constants';
import { RolApplicationService } from './service/Rol/RolApplicationService';
import { ClassificationApplicationService } from './service/Classification/ClassificationApplicationService';

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
    
    const ClassificationApplicationProvider = {
      provide: CLASSIFICATION_APPLICATION,
      useFactory() {
        return new ClassificationApplicationService()
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
        RolApplicationProvider,
        ClassificationApplicationProvider
      ],
      exports: [
        ROL_APPLICATION,
        CLASSIFICATION_APPLICATION
      ],
    }
  }

}

