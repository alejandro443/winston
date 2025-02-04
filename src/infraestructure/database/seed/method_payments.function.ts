import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../shared/log/Logger';
import { config } from 'dotenv';
import { MethodPayment } from '../../../domain/entities/MethodPayment.entity';

config();

export async function createMethodPayments({insert = false}) {
  if(!insert){
    return;
  }
  
  const logger = new Logger('Insert Data');

  logger.message('INSERTAR METODOS DE PAGOS');
  
  const data = await fsPromises.readFileSync(
    __dirname + `/data/system/method_payments.yml`,
    'utf8',
  );
  const entity = load(data) as MethodPayment[];

  const existingData = await MethodPayment.findAll({
    where: { id: entity.map((a) => a.id) },
  });
  const dataToInsert = entity.filter(
    (a) => !existingData.some((existingData) => existingData.id === a.id),
  );

  if (dataToInsert.length > 0) {
    await MethodPayment.bulkCreate(dataToInsert);
    logger.message('METODOS DE PAGOS insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para METODOS DE PAGOS.');
  }
}