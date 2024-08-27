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
import { ProductBrandController } from './controllers/product_brand_controller';
import { ProductCategoryController } from './controllers/product_category_controller';
import { ProductController } from './controllers/product_controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@src/infraestructure/persistence/constants/constants';
import { RegionController } from './controllers/region_controller';
import { CountryController } from './controllers/country_controller';
import { DepartmentController } from './controllers/department_controller';
import { ProvinceController } from './controllers/province_controller';
import { DistrictController } from './controllers/district_controller';
import { IssuableDocumentController } from './controllers/issuable_document_controller';
import { TypeChannelController } from './controllers/type_channel_controller';
import { CompanyPositionController } from './controllers/company_position_controller';
import { MethodPaymentController } from './controllers/method_payment_controller';
import { WayToPayController } from './controllers/way_to_pay_controller';
import { SupplyTypeController } from './controllers/supply_type_controller';
import { UnitMeasurementController } from './controllers/unit_measurement_controller';
import { SupplyController } from './controllers/supply_controller';
import { SkuListController } from './controllers/sku_list_controller';
import { WorkAreaController } from './controllers/work_area_controller';
import { OperationController } from './controllers/operation_controller';
import { SettingController } from './controllers/setting_controller';
import { BusinessTurnController } from './controllers/business_turn_controller';
import { BusinessSubcategoryController } from './controllers/business_subcategory_controller';
import { ZoneController } from './controllers/zone_controller';
import { UbigeoController } from './controllers/ubigeo_controller';
import { UploadController } from './controllers/upload_controller';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    UploadController,
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
    ProductBrandController,
    ProductCategoryController,
    ProductController,
    RegionController,
    CountryController,
    DepartmentController,
    ProvinceController,
    DistrictController,
    IssuableDocumentController,
    TypeChannelController,
    CompanyPositionController,
    MethodPaymentController,
    WayToPayController,
    SupplyTypeController,
    UnitMeasurementController,
    SupplyController,
    SkuListController,
    WorkAreaController,
    OperationController,
    SettingController,
    BusinessTurnController,
    BusinessSubcategoryController,
    ZoneController,
    UbigeoController
  ],
})
export class InterfacesModule {}
