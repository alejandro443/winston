import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  DEVELOPMENT,
  TEST,
  PRODUCTION,
} from '../persistence/constants/constants';
import { DatabaseConfiguration } from '../shared/configurations/database.configuration';

import { config } from 'dotenv';
config();

import { Rol } from '../../domain/entities/Rol.entity';
import { AccessRol } from '../../domain/entities/AccessRol.entity';
import { UserAccess } from '../../domain/entities/UserAccess.entity';
import { User } from '../../domain/entities/User.entity';
import { Access } from '../../domain/entities/Access.entity';
import { UserRol } from '../../domain/entities/UserRol.entity';
import { Classification } from '../../domain/entities/Classification.entity';
import { Client } from '../../domain/entities/Client.entity';
import { Group } from '../../domain/entities/Group.entity';
import { TypeClient } from '../../domain/entities/TypeClient.entity';
import { TypeWorker } from '../../domain/entities/TypeWorker.entity';
import { Worker } from '../../domain/entities/Worker.entity';
import { Person } from '../../domain/entities/Person.entity';
import { TypeDocument } from '../../domain/entities/TypeDocument.entity';
import { Company } from '../../domain/entities/Company.entity';
import { CompanyWorker } from '../../domain/entities/CompanyWorker.entity';
import { ClientDeliveryMethod } from '../../domain/entities/ClientDeliveryMethod.entity';
import { ClientDeliveryPoint } from '../../domain/entities/ClientDeliveryPoint.entity';
import { CompanyPosition } from '../../domain/entities/CompanyPosition.entity';
import { DeliveryMethod } from '../../domain/entities/DeliveryMethod.entity';
import { DeliveryPoint } from '../../domain/entities/DeliveryPoint.entity';
import { Organization } from '../../domain/entities/Organization.entity';
import { CompanyArea } from '../../domain/entities/CompanyArea.entity';
import { ProductCategory } from '../../domain/entities/ProductCategory.entity';
import { Product } from '../../domain/entities/Product.entity';
import { ProductBrand } from '../../domain/entities/ProductBrand.entity';
import { TypeChannel } from '../../domain/entities/TypeChannel.entity';
import { Region } from '../../domain/entities/Region.entity';
import { Country } from '../../domain/entities/Country.entity';
import { Department } from '../../domain/entities/Department.entity';
import { Province } from '../../domain/entities/Province.entity';
import { District } from '../../domain/entities/District.entity';
import { CommercialSection } from '../../domain/entities/CommercialSection';
import { MethodPayment } from '../../domain/entities/MethodPayment.entity';
import { WayToPay } from '../../domain/entities/WayToPay.entity';
import { IssuableDocument } from '../../domain/entities/IssuableDocument.entity';
import { SupplyType } from '../../domain/entities/SupplyType.entity';
import { UnitMeasurement } from '../../domain/entities/UnitMeasurement.entity';
import { Supply } from '../../domain/entities/Supply.entity';

let configuration: any;
switch (process.env.NODE_ENV as any) {
  case DEVELOPMENT:
    configuration = DatabaseConfiguration.development;
    break;
  case TEST:
    configuration = DatabaseConfiguration.test;
    break;
  case PRODUCTION:
    configuration = DatabaseConfiguration.production;
    break;
  default:
    configuration = DatabaseConfiguration.development;
}
export const sequelize = new Sequelize(configuration);

export const ConnectionProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
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
        Supply
      ]);

      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
