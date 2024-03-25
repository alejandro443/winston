import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const GenerateToken = async (user: any, client: any) => {
  var process: any = process.env;
  
  const token = jwt.sign(
    {
      user_id: user.id,
      user_code: user.code,
      client_code: client.code,
      username: user.user,
      expires: new Date(
        new Date().getTime() +
          +process.DAYS_EXPIRE_JWT * 24 * 60 * 60 * 1000,
      ),
    },
    process.JWT_TOKEN_KEY,
    { expiresIn: +process.DAYS_EXPIRE_JWT * 24 * 60 * 60 * 1000 },
  );
  return token;
};
