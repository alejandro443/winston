import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { IssuableDocument } from '../../../domain/entities/IssuableDocument.entity';

config();

export async function createIssuableDocuments({insert = false, pais = ''}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR TIPOS DE DOCUMENTOS EMITIBLES');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/issuable_documents.yml`,
    'utf8',
  );
  const entity = load(data) as IssuableDocument[];

  const existingData = await IssuableDocument.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await IssuableDocument.bulkCreate(dataToInsert);
    logger.message('DOCUMENTOS EMITIBLES insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para DOCUMENTOS EMITIBLES.');
  }
}