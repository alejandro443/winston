import * as bcrypt from 'bcrypt';

export const ValidatorPassword = async (passwordLogin: any, userPassword: any) => {
  return await bcrypt.compareSync(passwordLogin, userPassword);
};
