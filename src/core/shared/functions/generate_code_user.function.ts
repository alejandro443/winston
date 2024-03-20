export const GenerateCodeUser = async (identifier) => {
  var prefix_code: string = "USR_";
  return prefix_code + identifier;
}

export const GenerateRandomCodeUser = async () => {
  var prefix_code: string = "USR_";
  var identifier = String(Date.now()).slice(-6);
  return prefix_code + identifier;
}