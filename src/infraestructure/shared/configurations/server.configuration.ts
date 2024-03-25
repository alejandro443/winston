// DEPRECATED
import { config } from 'dotenv';
config();

export interface ServerConfiguration {
  port: number;
}

export default () => ({
  server: {
    port: 5555,
  },
});
