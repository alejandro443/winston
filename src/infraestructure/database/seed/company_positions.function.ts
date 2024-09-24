import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { CompanyPosition } from '../../../domain/entities/CompanyPosition.entity';

config();

export async function createCompanyPositions({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR COMPANY POSITIONS');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/company_positions.yml`,
    'utf8',
  );
  const entity = load(data) as CompanyPosition[];

  const existingData = await CompanyPosition.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await CompanyPosition.bulkCreate(dataToInsert);
    logger.message('COMPANY POSITIONS insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para COMPANY POSITIONS.');
  }
}