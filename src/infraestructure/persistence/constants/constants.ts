import { config } from 'dotenv';
config();

export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';

const processenv: any = process.env;
export const jwtConstants = {
  secret: processenv.JWT_TOKEN_KEY,
};
