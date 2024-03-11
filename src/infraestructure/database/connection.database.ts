import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../persistence/constants/constants';
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

export const ConnectionProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      var configuration;
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
        Access,
        Rol,
        Worker,
        User,
        Client,
        Group,
        TypeClient,
        TypeWorker,
        Classification,
        AccessRol,
        UserAccess,
        UserRol
      ]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];