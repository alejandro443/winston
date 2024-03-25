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
    port: parseInt(processenv.DATABASE_PORT, 10),
    database: processenv.DATABASE_NAME,
    username: processenv.DATABASE_USER,
    password: processenv.DATABASE_PASSWORD,
    host: processenv.DATABASE_HOST,
    dialect: processenv.DATABASE_DIALECT,
  },
  production: {
    port: parseInt(processenv.DATABASE_PORT, 10),
    database: processenv.DATABASE_NAME,
    username: processenv.DATABASE_USER,
    password: processenv.DATABASE_PASSWORD,
    host: processenv.DATABASE_HOST_PROD,
    dialect: processenv.DATABASE_DIALECT,
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
