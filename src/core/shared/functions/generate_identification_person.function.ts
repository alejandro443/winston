export const GenerateRandomIdentificationPerson = async () => {
  const prefix_code: string = 'auto-';
  const identifier = new Date().getTime();
  return prefix_code + identifier;
};
