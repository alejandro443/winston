export const GenerateCodeClient = async (identifier_person: any) => {
  const prefix_code: string = 'CLT_';
  return prefix_code + identifier_person;
};
