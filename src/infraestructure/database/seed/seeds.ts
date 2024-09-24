import { Rol } from '../../../domain/entities/Rol.entity';
import { Logger } from '../../../infraestructure/shared/log/Logger';
import { sequelize } from '../connection.database';
import { InserData } from './insert_data';
import { Access } from '../../../domain/entities/Access.entity';
import { TypeClient } from '../../../domain/entities/TypeClient.entity';
import { AccessRol } from '../../../domain/entities/AccessRol.entity';
import { UserRol } from '../../../domain/entities/UserRol.entity';
import { UserAccess } from '../../../domain/entities/UserAccess.entity';
import { Client } from '../../../domain/entities/Client.entity';
import { User } from '../../../domain/entities/User.entity';
import { Worker } from '../../../domain/entities/Worker.entity';
import { Person } from '../../../domain/entities/Person.entity';
import { Group } from '../../../domain/entities/Group.entity';
import { TypeWorker } from '../../../domain/entities/TypeWorker.entity';
import { Classification } from '../../../domain/entities/Classification.entity';
import { TypeDocument } from '../../../domain/entities/TypeDocument.entity';
import { Company } from '../../../domain/entities/Company.entity';
import { CompanyWorker } from '../../../domain/entities/CompanyWorker.entity';
import { ClientDeliveryMethod } from '../../../domain/entities/ClientDeliveryMethod.entity';
import { ClientDeliveryPoint } from '../../../domain/entities/ClientDeliveryPoint.entity';
import { CompanyPosition } from '../../../domain/entities/CompanyPosition.entity';
import { DeliveryMethod } from '../../../domain/entities/DeliveryMethod.entity';
import { DeliveryPoint } from '../../../domain/entities/DeliveryPoint.entity';
import { Organization } from '../../../domain/entities/Organization.entity';
import { CompanyArea } from '../../../domain/entities/CompanyArea.entity';
import { Region } from '../../../domain/entities/Region.entity';
import { Country } from '../../../domain/entities/Country.entity';
import { Department } from '../../../domain/entities/Department.entity';
import { Province } from '../../../domain/entities/Province.entity';
import { District } from '../../../domain/entities/District.entity';
import { ProductCategory } from '../../../domain/entities/ProductCategory.entity';
import { ProductBrand } from '../../../domain/entities/ProductBrand.entity';
import { Product } from '../../../domain/entities/Product.entity';
import { TypeChannel } from '../../../domain/entities/TypeChannel.entity';
import { CommercialSection } from '../../../domain/entities/CommercialSection';
import { MethodPayment } from '../../../domain/entities/MethodPayment.entity';
import { WayToPay } from '../../../domain/entities/WayToPay.entity';
import { IssuableDocument } from '../../../domain/entities/IssuableDocument.entity';
import { SupplyType } from '../../../domain/entities/SupplyType.entity';
import { UnitMeasurement } from '../../../domain/entities/UnitMeasurement.entity';
import { Ubigeo } from '../../../domain/entities/Ubigeo.entity';
import { Zone } from '../../../domain/entities/Zone.entity';
import { BusinessSubcategory } from '../../../domain/entities/BusinessSubcategory.entity';
import { BusinessTurn } from '../../../domain/entities/BusinessTurn.entity';
import { Setting } from '../../../domain/entities/Setting.entity';
import { Operation } from '../../../domain/entities/Operation.entity';
import { WorkArea } from '../../../domain/entities/WorkArea.entity';
import { SkuList } from '../../../domain/entities/SkuList.entity';
import { Supply } from '../../../domain/entities/Supply.entity';
import { Function } from '../../../domain/entities/Function.entity';
import { ListPrice } from '../../../domain/entities/ListPrice.entity';
import { ZoneDetail } from '../../../domain/entities/ZoneDetail.entity';
import { Warehouse } from '../../../domain/entities/Warehouse.entity';
import { PointSale } from '../../../domain/entities/PointSale.entity';
import { Sale } from '../../../domain/entities/Sale.entity';
import { SaleDetail } from '../../../domain/entities/SaleDetail.entity';
import { PointSaleUser } from '../../../domain/entities/PointSaleUser.entity';
import { ListPriceProduct } from '../../../domain/entities/ListPriceProduct.entity';
import { ListPriceClient } from '../../../domain/entities/ListPriceClient.entity';
import { FinancialSequence } from '../../../domain/entities/FinancialSequence.entity';
import { SaleDocument } from '../../../domain/entities/SaleDocument.entity';
import { SalesPayment } from '../../../domain/entities/SalesPayment.entity';
import { PaymentSchedule } from '../../../domain/entities/PaymentSchedule.entity';
import { SalePaymentSchedule } from '../../../domain/entities/SalePaymentSchedule.entity';
import { QuotaPayment } from '../../../domain/entities/QuotaPayment.entity';

const logger = new Logger('Seeds');

async function runSeedInsertData(type, seed) {
  sequelize.addModels([
    Access,
    User,
    Rol,
    AccessRol,
    UserAccess,
    UserRol,
    Client,
    Group,
    Worker,
    TypeClient,
    TypeWorker,
    Classification,
    Person,
    TypeDocument,
    Company,
    CompanyWorker,
    ClientDeliveryMethod,
    ClientDeliveryPoint,
    CompanyPosition,
    DeliveryMethod,
    DeliveryPoint,
    Organization,
    CompanyArea,
    ProductCategory,
    ProductBrand,
    Product,
    TypeChannel,
    Region,
    Country,
    Department,
    Province,
    District,
    CommercialSection,
    MethodPayment,
    WayToPay,
    IssuableDocument,
    SupplyType,
    UnitMeasurement,
    Supply,
    SkuList,
    WorkArea,
    Operation,
    Function,
    Setting,
    BusinessTurn,
    BusinessSubcategory,
    Zone,
    Ubigeo,
    ZoneDetail,
    Warehouse,
    PointSale,
    Sale,
    SaleDetail,
    PointSaleUser,
    ListPrice,
    ListPriceProduct,
    ListPriceClient,
    FinancialSequence,
    SaleDocument,
    SalesPayment,
    PaymentSchedule,
    SalePaymentSchedule,
    QuotaPayment
  ]);
  const inser_data: any = new InserData();
  await inser_data.run(type, seed);
}

const args = process.argv.slice(2);
const type = args[0];
const seed = args[1];

runSeedInsertData(type, seed)
  .then(() => {
    logger.finalize('Seeds ejecutados exitosamente.');
  })
  .catch((error) => {
    logger.error('Error al ejecutar seeds:' + error);
  });
