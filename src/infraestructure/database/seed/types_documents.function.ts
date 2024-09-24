import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { TypeDocument } from '../../../domain/entities/TypeDocument.entity';

config();

export async function createTypesDocuments({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR TIPOS DE DOCUMENT');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/types_documents.yml`,
    'utf8',
  );
  const entity = load(data) as TypeDocument[];

  const existingData = await TypeDocument.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await TypeDocument.bulkCreate(dataToInsert);
    logger.message('TIPOS DE DOCUMENT insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para TIPOS DE DOCUMENT.');
  }
}