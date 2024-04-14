import { Rol } from '../../../domain/entities/Rol.entity';
import { Logger } from '../../../infraestructure/shared/log/Logger';
import { sequelize } from '../connection.database';
import { InserData } from './insert_data';
import { Access } from '../../../domain/entities/Access.entity';
import { TypeClient } from '../../../domain/entities/TypeClient.entity';
import { AccessRol } from '../../../domain/entities/AccessRol.entity';
import { UserRol } from '../../../domain/entities/UserRol.entity';
import { UserAccess } from '../../../domain/entities/UserAccess.entity';
import { Client } from '../../../domain/entities/Client.entity';
import { User } from '../../../domain/entities/User.entity';
import { Worker } from '../../../domain/entities/Worker.entity';
import { Person } from '../../../domain/entities/Person.entity';
import { Group } from '../../../domain/entities/Group.entity';
import { TypeWorker } from '../../../domain/entities/TypeWorker.entity';
import { Classification } from '../../../domain/entities/Classification.entity';
import { TypeDocument } from '../../../domain/entities/TypeDocument.entity';
import { Company } from '../../../domain/entities/Company.entity';
import { CompanyWorker } from '../../../domain/entities/CompanyWorker.entity';
import { ClientDeliveryMethod } from '../../../domain/entities/ClientDeliveryMethod.entity';
import { ClientDeliveryPoint } from '../../../domain/entities/ClientDeliveryPoint.entity';
import { CompanyPosition } from '../../../domain/entities/CompanyPosition.entity';
import { DeliveryMethod } from '../../../domain/entities/DeliveryMethod.entity';
import { DeliveryPoint } from '../../../domain/entities/DeliveryPoint.entity';
import { Organization } from '../../../domain/entities/Organization.entity';
import { CompanyArea } from '../../../domain/entities/CompanyArea.entity';
import { Region } from '../../../domain/entities/Region.entity';
import { Country } from '../../../domain/entities/Country.entity';
import { Department } from '../../../domain/entities/Department.entity';
import { Province } from '../../../domain/entities/Province.entity';
import { District } from '../../../domain/entities/District.entity';
import { ProductCategory } from '../../../domain/entities/ProductCategory.entity';

const logger = new Logger('Seeds');

async function runSeedInsertData() {
  sequelize.addModels([
    Access,
    User,
    Rol,
    AccessRol,
    UserAccess,
    UserRol,
    Client,
    Group,
    Worker,
    TypeClient,
    TypeWorker,
    Classification,
    Person,
    TypeDocument,
    Company,
    CompanyWorker,
    ClientDeliveryMethod,
    ClientDeliveryPoint,
    CompanyPosition,
    DeliveryMethod,
    DeliveryPoint,
    Organization,
    CompanyArea,
    Classification,
    Region,
    Country,
    Department,
    Province,
    District,
    ProductCategory,
  ]);
  const inser_data: any = new InserData();
  await inser_data.run();
}

runSeedInsertData()
  .then(() => {
    logger.finalize('Seeds ejecutados exitosamente.');
  })
  .catch((error) => {
    logger.error('Error al ejecutar seeds:' + error);
  });
