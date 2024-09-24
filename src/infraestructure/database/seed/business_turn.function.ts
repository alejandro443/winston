import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { BusinessTurn } from '../../../domain/entities/BusinessTurn.entity';

config();

export async function createBusinessTurns({insert = false, pais = ''}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR BUSINESS TURN');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/business_turn.yml`,
    'utf8',
  );
  const entity = load(data) as BusinessTurn[];

  const existingData = await BusinessTurn.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await BusinessTurn.bulkCreate(dataToInsert);
    logger.message('BUSINESS TURN insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para BUSINESS TURN.');
  }
}