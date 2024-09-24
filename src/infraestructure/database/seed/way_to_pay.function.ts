import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { WayToPay } from '../../../domain/entities/WayToPay.entity';

config();

export async function createWayToPays({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR WAY TO PAYS');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/way_to_pay.yml`,
    'utf8',
  );
  const entity = load(data) as WayToPay[];

  const existingData = await WayToPay.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await WayToPay.bulkCreate(dataToInsert);
    logger.message('WAY TO PAYS insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para WAY TO PAYS.');
  }
}