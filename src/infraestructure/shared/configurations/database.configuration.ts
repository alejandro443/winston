import { IDatabaseConfiguration } from 'src/infraestructure/database/interface.database';
import { config } from 'dotenv';
config();

const processenv: any = process.env;

export const DatabaseConfiguration: IDatabaseConfiguration = {
  development: {
    port: parseInt(processenv.DATABASE_PORT_DEV, 10),
    database: processenv.DATABASE_NAME_DEV,
    username: processenv.DATABASE_USER_DEV,
    password: processenv.DATABASE_PASSWORD_DEV,
    host: processenv.DATABASE_HOST_DEV,
    dialect: 'postgres',
    dialectModule: require('pg'),
    timezone: '-05:00',  // Zona horaria de Perú (UTC-5)
    dialectOptions: {
      useUTC: false,  // Para evitar que Sequelize use UTC internamente
    },
    define: {
      timestamps: true,  // Habilita createdAt, updatedAt, y deletedAt
    },
  },
  test: {
    port: parseInt(processenv.DATABASE_PORT_TEST, 10),
    database: processenv.DATABASE_NAME_TEST,
    username: processenv.DATABASE_USER_TEST,
    password: processenv.DATABASE_PASSWORD_TEST,
    host: processenv.DATABASE_HOST_TEST,
    dialect: 'postgres',
    dialectModule: require('pg'),
    timezone: '-05:00',  // Zona horaria de Perú (UTC-5)
    dialectOptions: {
      useUTC: false,  // Para evitar que Sequelize use UTC internamente
    },
    define: {
      timestamps: true,  // Habilita createdAt, updatedAt, y deletedAt
    },
  },
  production: {
    port: parseInt(processenv.DATABASE_PORT_PROD, 10),
    database: processenv.DATABASE_NAME_PROD,
    username: processenv.DATABASE_USER_PROD,
    password: processenv.DATABASE_PASSWORD_PROD,
    host: processenv.DATABASE_HOST_PROD,
    dialect: 'postgres',
    dialectModule: require('pg'),
    timezone: '-05:00',  // Zona horaria de Perú (UTC-5)
    dialectOptions: {
      useUTC: false,  // Para evitar que Sequelize use UTC internamente
    },
    define: {
      timestamps: true,  // Habilita createdAt, updatedAt, y deletedAt
    },
  },
};

export default () => ({
  database: {
    host: processenv.DATABASE_HOST,
    port: parseInt(processenv.DATABASE_PORT, 10),
    database: processenv.DATABASE_NAME,
    username: processenv.DATABASE_USER,
    password: processenv.DATABASE_PASSWORD,
    dialect: 'postgres',
    dialectModule: require('pg'),
    timezone: '-05:00',  // Zona horaria de Perú (UTC-5)
    dialectOptions: {
      useUTC: false,  // Para evitar que Sequelize use UTC internamente
    },
    define: {
      timestamps: true,  // Habilita createdAt, updatedAt, y deletedAt
    },
  },
});
