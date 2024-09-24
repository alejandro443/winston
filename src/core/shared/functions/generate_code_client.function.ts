import { TypeEntity } from '../../../infraestructure/shared/enums/TypeEntity';

export const GenerateCodeClient = async (
  identifier_person: any,
  type_entity: string,
) => {
  const prefix_type_entity = type_entity == TypeEntity.PERSON ? 'P' : 'C';
  const subfix_code = new Date().getTime();

  const prefix_code: string = `CLT${prefix_type_entity}${identifier_person}${subfix_code}`;
  return prefix_code;
};
