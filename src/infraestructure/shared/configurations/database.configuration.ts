import { IDatabaseConfiguration } from 'src/infraestructure/database/interface.database';
import { config } from 'dotenv';
config();

const processenv: any = process.env

export const DatabaseConfiguration: IDatabaseConfiguration = {
  development: {
    port: parseInt(processenv.DATABASE_PORT, 10),
    database: processenv.DATABASE_NAME_DEV,
    username: processenv.DATABASE_USER_DEV,
    password: processenv.DATABASE_PASSWORD_DEV,
    host: processenv.DATABASE_HOST_DEV,
    dialect: processenv.DATABASE_DIALECT_DEV,
  },
  test: {
    port: parseInt(processenv.DATABASE_PORT_TEST, 10),
    database: processenv.DATABASE_NAME_TEST,
    username: processenv.DATABASE_USER_TEST,
    password: processenv.DATABASE_PASSWORD_TEST,
    host: processenv.DATABASE_HOST_TEST,
    dialect: processenv.DATABASE_DIALECT_TEST,
  },
  production: {
    port: parseInt(processenv.DATABASE_PORT_PROD, 10),
    database: processenv.DATABASE_NAME_PROD,
    username: processenv.DATABASE_USER_PROD,
    password: processenv.DATABASE_PASSWORD_PROD,
    host: processenv.DATABASE_HOST_PROD_PROD,
    dialect: processenv.DATABASE_DIALECT_PROD,
  },
};

export default () => ({
  database: {
    host: processenv.DATABASE_HOST,
    port: parseInt(processenv.DATABASE_PORT, 10),
    database: processenv.DATABASE_NAME,
    username: processenv.DATABASE_USER,
    password: processenv.DATABASE_PASSWORD,
    dialect: processenv.DATABASE_DIALECT,
  },
});
