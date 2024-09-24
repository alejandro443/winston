import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { TypeChannel } from '../../../domain/entities/TypeChannel.entity';

config();

export async function createTypesChannel({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR TIPOS DE CANAL');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/types_channel.yml`,
    'utf8',
  );
  const entity = load(data) as TypeChannel[];

  const existingData = await TypeChannel.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await TypeChannel.bulkCreate(dataToInsert);
    logger.message('Ubigeos insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para tipos de canal.');
  }
}