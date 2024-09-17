export const GenerateCodeProductBrand = async (identifier: any) => {
  const prefix_code: string = 'PRB_';
  return prefix_code + identifier;
};

export const GenerateRandomCodeProductBrand = async () => {
  const prefix_code: string = 'PRB_';
  const identifier = new Date().getTime();
  return prefix_code + identifier;
};
