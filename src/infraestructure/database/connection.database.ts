import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  DEVELOPMENT,
  TEST,
  PRODUCTION,
} from '../persistence/constants/constants';
import { DatabaseConfiguration } from '../shared/configurations/database.configuration';

import { Rol } from 'src/domain/entities/Rol.entity';
import { AccessRol } from 'src/domain/entities/AccessRol.entity';
import { UserAccess } from 'src/domain/entities/UserAccess.entity';
import { User } from 'src/domain/entities/User.entity';
import { Access } from 'src/domain/entities/Access.entity';
import { UserRol } from 'src/domain/entities/UserRol.entity';
import { Classification } from 'src/domain/entities/Classification.entity';
import { Client } from 'src/domain/entities/Client.entity';
import { Group } from 'src/domain/entities/Group.entity';
import { TypeClient } from 'src/domain/entities/TypeClient.entity';
import { TypeWorker } from 'src/domain/entities/TypeWorker.entity';
import { Worker } from 'src/domain/entities/Worker.entity';
import { Person } from 'src/domain/entities/Person.entity';
import { TypeDocument } from 'src/domain/entities/TypeDocument.entity';
import { ClientCompany } from '@src/domain/entities/ClientCompany.entity';
import { ClientCompanyWorker } from '@src/domain/entities/ClientCompanyWorker.entity';
import { ClientDeliveryMethod } from '@src/domain/entities/ClientDeliveryMethod.entity';
import { ClientDeliveryPoint } from '@src/domain/entities/ClientDeliveryPoint.entity';
import { CompanyPosition } from '@src/domain/entities/CompanyPosition.entity';
import { DeliveryMethod } from '@src/domain/entities/DeliveryMethod.entity';
import { DeliveryPoint } from '@src/domain/entities/DeliveryPoint.entity';
import { Organization } from '@src/domain/entities/Organization.entity';

export const ConnectionProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let configuration;
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
      const sequelize = new Sequelize(configuration);
      sequelize.addModels([
        AccessRol,
        UserAccess,
        UserRol,
        Access,
        Rol,
        User,
        Client,
        Group,
        Worker,
        TypeClient,
        TypeWorker,
        Classification,
        Person,
        TypeDocument,
        ClientCompany,
        ClientCompanyWorker,
        ClientDeliveryMethod,
        ClientDeliveryPoint,
        CompanyPosition,
        DeliveryMethod,
        DeliveryPoint,
        Organization
      ]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
