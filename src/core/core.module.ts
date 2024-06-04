import { DynamicModule, Module, Type } from '@nestjs/common';
import {
  AUTH_APPLICATION,
  USER_APPLICATION,
  CLASSIFICATION_APPLICATION,
  ROL_APPLICATION,
  CLIENT_APPLICATION,
  TYPE_CLIENT_APPLICATION,
  TYPE_DOCUMENT_APPLICATION,
  TYPE_WORKER_APPLICATION,
  GROUP_APPLICATION,
  WORKER_APPLICATION,
  PERSON_APPLICATION,
  ORGANIZATION_APPLICATION,
  ACCESS_APPLICATION,
  ACCESS_ROL_APPLICATION,
  PRODUCT_BRAND_APPLICATION,
  PRODUCT_CATEGORY_APPLICATION,
  PRODUCT_APPLICATION,
  REGION_APPLICATION,
  COUNTRY_APPLICATION,
  DEPARTMENT_APPLICATION,
  PROVINCE_APPLICATION,
  DISTRICT_APPLICATION,
  ISSUABLE_DOCUMENT_APPLICATION,
} from './shared/constants/application.constants';
import { RolApplicationService } from './service/Rol/RolApplicationService';
import { ClassificationApplicationService } from './service/Classification/ClassificationApplicationService';
import { UserApplicationService } from './service/User/UserApplicationService';
import { AuthenticationApplicationService } from './service/Auth/AuthApplicationService';
import { ClientApplicationService } from './service/Client/ClientApplicationService';
import { TypeClientApplicationService } from './service/TypeClient/TypeClientApplicationService';
import { TypeDocumentApplicationService } from './service/TypeDocument/TypeDocumentApplicationService';
import { TypeWorkerApplicationService } from './service/TypeWorker/TypeWorkerApplicationService';
import { GroupApplicationService } from './service/Group/GroupApplicationService';
import { WorkerApplicationService } from './service/Worker/WorkerApplicationService';
import { PersonApplicationService } from './service/Person/PersonApplicationService';
import { OrganizationApplicationService } from './service/Organization/OrganizationApplicationService';
import { AccessApplicationService } from './service/Access/AccessApplicationService';
import { AccessRolApplicationService } from './service/AccessRol/AccessRolApplicationService';
import { ProductBrandApplicationService } from './service/ProductBrand/ProductBrandApplicationService';
import { ProductCategoryApplicationService } from './service/ProductCategory/ProductCategoryApplicationService';
import { ProductApplicationService } from './service/Product/ProductApplicationService';
import { RegionApplicationService } from './service/Region/RegionApplicationService';
import { CountryApplicationService } from './service/Country/CountryApplicationService';
import { DepartmentApplicationService } from './service/Department/DepartmentApplicationService';
import { ProvinceApplicationService } from './service/Province/ProvinceApplicationService';
import { DistrictApplicationService } from './service/District/DistrictApplicationService';
import { IssuableDocumentApplicationService } from './service/IssuableDocument/IssuableDocumentApplicationService';

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
        return new AuthenticationApplicationService();
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

    const ClientApplicationProvider = {
      provide: CLIENT_APPLICATION,
      useFactory() {
        return new ClientApplicationService();
      },
      inject: [],
    };

    const TypeClientApplicationProvider = {
      provide: TYPE_CLIENT_APPLICATION,
      useFactory() {
        return new TypeClientApplicationService();
      },
      inject: [],
    };

    const TypeDocumentApplicationProvider = {
      provide: TYPE_DOCUMENT_APPLICATION,
      useFactory() {
        return new TypeDocumentApplicationService();
      },
      inject: [],
    };

    const TypeWorkerApplicationProvider = {
      provide: TYPE_WORKER_APPLICATION,
      useFactory() {
        return new TypeWorkerApplicationService();
      },
      inject: [],
    };

    const GroupApplicationProvider = {
      provide: GROUP_APPLICATION,
      useFactory() {
        return new GroupApplicationService();
      },
      inject: [],
    };

    const WorkerApplicationProvider = {
      provide: WORKER_APPLICATION,
      useFactory() {
        return new WorkerApplicationService();
      },
      inject: [],
    };

    const PersonApplicationProvider = {
      provide: PERSON_APPLICATION,
      useFactory() {
        return new PersonApplicationService();
      },
      inject: [],
    };

    const OrganizationApplicationProvider = {
      provide: ORGANIZATION_APPLICATION,
      useFactory() {
        return new OrganizationApplicationService();
      },
      inject: [],
    };

    const AccessApplicationProvider = {
      provide: ACCESS_APPLICATION,
      useFactory() {
        return new AccessApplicationService();
      },
      inject: [],
    };

    const AccessRolApplicationProvider = {
      provide: ACCESS_ROL_APPLICATION,
      useFactory() {
        return new AccessRolApplicationService();
      },
      inject: [],
    };
    const ProductBrandApplicationProvider = {
      provide: PRODUCT_BRAND_APPLICATION,
      useFactory() {
        return new ProductBrandApplicationService();
      },
      inject: [],
    };
    const ProductCategoryApplicationProvider = {
      provide: PRODUCT_CATEGORY_APPLICATION,
      useFactory() {
        return new ProductCategoryApplicationService();
      },
      inject: [],
    };
    const ProductApplicationProvider = {
      provide: PRODUCT_APPLICATION,
      useFactory() {
        return new ProductApplicationService();
      },
      inject: [],
    };

    const RegionApplicationProvider = {
      provide: REGION_APPLICATION,
      useFactory() {
        return new RegionApplicationService();
      },
      inject: [],
    };

    const CountryApplicationProvider = {
      provide: COUNTRY_APPLICATION,
      useFactory() {
        return new CountryApplicationService();
      },
      inject: [],
    };

    const DepartmentApplicationProvider = {
      provide: DEPARTMENT_APPLICATION,
      useFactory() {
        return new DepartmentApplicationService();
      },
      inject: [],
    };

    const ProvinceApplicationProvider = {
      provide: PROVINCE_APPLICATION,
      useFactory() {
        return new ProvinceApplicationService();
      },
      inject: [],
    };

    const DistrictApplicationProvider = {
      provide: DISTRICT_APPLICATION,
      useFactory() {
        return new DistrictApplicationService();
      },
      inject: [],
    };
    
    const IssuableDocumentApplicationProvider = {
      provide: DISTRICT_APPLICATION,
      useFactory() {
        return new IssuableDocumentApplicationService();
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
        ClassificationApplicationProvider,
        ClientApplicationProvider,
        TypeClientApplicationProvider,
        TypeDocumentApplicationProvider,
        TypeWorkerApplicationProvider,
        GroupApplicationProvider,
        WorkerApplicationProvider,
        PersonApplicationProvider,
        OrganizationApplicationProvider,
        AccessApplicationProvider,
        AccessRolApplicationProvider,
        ProductBrandApplicationProvider,
        ProductCategoryApplicationProvider,
        ProductApplicationProvider,
        RegionApplicationProvider,
        CountryApplicationProvider,
        DepartmentApplicationProvider,
        ProvinceApplicationProvider,
        DistrictApplicationProvider,
        IssuableDocumentApplicationProvider
      ],
      exports: [
        AUTH_APPLICATION,
        CLASSIFICATION_APPLICATION,
        USER_APPLICATION,
        ROL_APPLICATION,
        CLIENT_APPLICATION,
        TYPE_CLIENT_APPLICATION,
        TYPE_DOCUMENT_APPLICATION,
        TYPE_WORKER_APPLICATION,
        GROUP_APPLICATION,
        WORKER_APPLICATION,
        PERSON_APPLICATION,
        ORGANIZATION_APPLICATION,
        ACCESS_APPLICATION,
        ACCESS_ROL_APPLICATION,
        PRODUCT_BRAND_APPLICATION,
        PRODUCT_CATEGORY_APPLICATION,
        PRODUCT_APPLICATION,
        REGION_APPLICATION,
        COUNTRY_APPLICATION,
        DEPARTMENT_APPLICATION,
        PROVINCE_APPLICATION,
        DISTRICT_APPLICATION,
        ISSUABLE_DOCUMENT_APPLICATION,
      ],
    };
  }
}
