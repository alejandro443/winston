import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { PointSale } from '../../../domain/entities/PointSale.entity';

config();

export async function createPointSales({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR TIPOS DE DOCUMENT');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/point_sales.yml`,
    'utf8',
  );
  const entity = load(data) as PointSale[];

  const existingData = await PointSale.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await PointSale.bulkCreate(dataToInsert);
    logger.message('TIPOS DE DOCUMENT insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para TIPOS DE DOCUMENT.');
  }
}