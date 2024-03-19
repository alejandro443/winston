import * as bcrypt from 'bcrypt'; 

export const ValidatorPassword = async (passwordLogin, userPassword) => {
  return await bcrypt.compareSync(passwordLogin, userPassword);
}