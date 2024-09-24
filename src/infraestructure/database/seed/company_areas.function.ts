import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { CompanyArea } from '../../../domain/entities/CompanyArea.entity';

config();

export async function createCompanyAreas({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR COMPANY AREAS');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/company_areas.yml`,
    'utf8',
  );
  const entity = load(data) as CompanyArea[];

  const existingData = await CompanyArea.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await CompanyArea.bulkCreate(dataToInsert);
    logger.message('COMPANY AREAS insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para COMPANY AREAS.');
  }
}