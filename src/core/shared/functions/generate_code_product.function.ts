export const GenerateCodeProduct = async (identifier: any) => {
  const prefix_code: string = 'PRD_';
  return prefix_code + identifier;
};

export const GenerateRandomCodeProduct = async () => {
  const prefix_code: string = 'PRD_';
  const identifier = new Date().getTime();
  return prefix_code + identifier;
};
