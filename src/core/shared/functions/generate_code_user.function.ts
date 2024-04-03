export const GenerateCodeUser = async (identifier: any) => {
  const prefix_code: string = 'USR_';
  return prefix_code + identifier;
};

export const GenerateRandomCodeUser = async () => {
  const prefix_code: string = 'USR_';
  const identifier = new Date().getTime();
  return prefix_code + identifier;
};
