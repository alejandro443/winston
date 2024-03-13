// DEPRECATED
import { config } from 'dotenv';
config();

export interface ServerConfiguration {
  port: number;
}

export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 5555,
  },
});
