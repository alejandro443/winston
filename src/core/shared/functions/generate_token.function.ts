import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const GenerateToken = async (user: any, client: any) => {
  const processenv: any = process.env;

  var code_client = client == undefined ? 'USRSNCLT' : client.code;

  const token = jwt.sign(
    {
      user_id: user.id,
      user_code: user.code,
      client_code: code_client,
      username: user.user,
      expires: new Date(
        new Date().getTime() +
          +processenv.DAYS_EXPIRE_JWT * 24 * 60 * 60 * 1000,
      ),
    },
    processenv.JWT_TOKEN_KEY,
    { expiresIn: +processenv.DAYS_EXPIRE_JWT * 24 * 60 * 60 * 1000 },
  );
  return token;
};
