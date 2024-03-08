import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../persistence/constants/constants';
import { DatabaseConfiguration } from '../shared/configurations/database.configuration';

import { Rol } from 'src/core/domain/entities/Rol.entity';
import { AccessRol } from 'src/core/domain/entities/AccessRol.entity';
import { UserAccess } from 'src/core/domain/entities/UserAccess.entity';
import { User } from 'src/core/domain/entities/User.entity';
import { Access } from 'src/core/domain/entities/Access.entity';
import { UserRol } from 'src/core/domain/entities/UserRol.entity';

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
        AccessRol,
        Rol,
        User,
        UserAccess,
        UserRol
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];