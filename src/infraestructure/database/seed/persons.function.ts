import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { Person } from '../../../domain/entities/Person.entity';

config();

export async function createPersons({insert = false, pais = ''}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR TIPOS DE PERSONAS');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/person.yml`,
    'utf8',
  );
  const entity = load(data) as Person[];

  const existingData = await Person.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await Person.bulkCreate(dataToInsert);
    logger.message('PERSONAS insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para PERSONAS.');
  }
}