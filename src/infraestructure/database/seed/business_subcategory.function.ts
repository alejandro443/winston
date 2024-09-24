import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { BusinessSubcategory } from '../../../domain/entities/BusinessSubCategory.entity';

config();

export async function createBusinessSubcategories({insert = false, pais = ''}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');
  logger.message('INSERTAR BUSINESS SUBCATEGORY');
  
  try {
    const data = await fsPromises.readFileSync(
      __dirname + `/data/${pais}/business_subcategory.yml`,
      'utf8',
    );
    const entity = load(data) as BusinessSubcategory[];
  
    const existingData = await BusinessSubcategory.findAll({
      where: { id: entity.map((a) => a.id) },
    });
    const dataToInsert = entity.filter(
      (a) => !existingData.some((existingData) => existingData.id === a.id),
    );
  
    if (dataToInsert.length > 0) {
      await BusinessSubcategory.bulkCreate(dataToInsert);
      logger.message('BUSINESS SUBCATEGORY insertados exitosamente');
    } else {
      logger.message('No hay data para insertar para BUSINESS SUBCATEGORY.');
    }
    
  } catch (error) {
    console.log(error)
    return;
  }
}