import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../../infraestructure/shared/log/Logger';
import { Rol } from '../../../domain/entities/Rol.entity';
import { Access } from '../../../domain/entities/Access.entity';
import { AccessRol } from '../../../domain/entities/AccessRol.entity';
import { TypeClient } from '../../../domain/entities/TypeClient.entity';
import { config } from 'dotenv';
import { Classification } from '@src/domain/entities/Classification.entity';
config();

const logger = new Logger('Insert Data');

export class InserData {
  private pais: string;

  constructor(pais = 'pe') {
    this.pais = pais;
  }

  async run(): Promise<boolean> {
    logger.initialize('COMENZAR INSERTAR DATA');
    try {
      // LEER Y CARGA DATOS DE ROLES
      logger.message('INSERTAR ROLES');

      const rolesData = await fsPromises.readFileSync(
        __dirname + `/data/system/roles.yml`,
        'utf8',
      );
      const roles = load(rolesData) as Rol[];

      // Verificar si existen datos
      const existingRoles = await Rol.findAll({
        where: { id: roles.map((role) => role.id) },
      });
      const rolesToInsert = roles.filter(
        (role) =>
          !existingRoles.some((existingRole) => existingRole.id === role.id),
      );

      if (rolesToInsert.length > 0) {
        await Rol.bulkCreate(rolesToInsert);
        logger.message('Datos de roles insertados exitosamente');
      } else {
        logger.message('No hay data para insertar para roles');
      }

      // LEER Y CARGA DATOS DE ACCESS
      logger.message('INSERTAR ACCESS');
      const accessData = await fsPromises.readFileSync(
        __dirname + `/data/${this.pais}/accesses.yml`,
        'utf8',
      );
      const access = load(accessData) as Access[];

      const existingAccesses = await Access.findAll({
        where: { id: access.map((a) => a.id) },
      });
      const accessesToInsert = access.filter(
        (a) =>
          !existingAccesses.some(
            (existingAccess) => existingAccess.id === a.id,
          ),
      );

      if (accessesToInsert.length > 0) {
        await Access.bulkCreate(accessesToInsert);
        logger.message('Datos de access insertados exitosamente');
      } else {
        logger.message('No hay data para insertar para eccesos');
      }

      // LEER Y CARGA DATOS DE TIPOS DE CLIENTES
      logger.message('INSERTAR TYPES CLIENTS');
      const typeClientsData = await fsPromises.readFileSync(
        __dirname + `/data/${this.pais}/types_clients.yml`,
        'utf8',
      );
      const typeClient = load(typeClientsData) as TypeClient[];

      const existingTypesClients = await TypeClient.findAll({
        where: { id: typeClient.map((a) => a.id) },
      });
      const typeClientsToInsert = typeClient.filter(
        (a) =>
          !existingTypesClients.some(
            (existingTypeClient) => existingTypeClient.id === a.id,
          ),
      );

      if (typeClientsToInsert.length > 0) {
        await TypeClient.bulkCreate(typeClientsToInsert);
        logger.message('Datos de access insertados exitosamente');
      } else {
        logger.message('No hay data para insertar para tipos de clientes');
      }

      // LEER Y CARGA DATOS DE ACCESS ROLES
      logger.message('INSERTAR ACCESS ROLES');
      const roles_ids = await Rol.findAll({ attributes: ['id'] });
      const access_ids = await Access.findAll({ attributes: ['id'] });

      const access_roles_data = [];

      roles_ids.forEach(function (rol) {
        access_ids.forEach(function (access) {
          access_roles_data.push({ rol_id: rol.id, access_id: access.id });
        });
      });

      if (access_roles_data.length > 0) {
        await AccessRol.bulkCreate(access_roles_data);
        logger.message('Datos de access insertados exitosamente');
      } else {
        logger.message('No hay data para insertar para accesses');
      }

      // LEER Y CARGA DATOS DE TIPOS DE CLIENTES
      logger.message('INSERTAR TYPES CLIENTS');
      const classificationsData = await fsPromises.readFileSync(
        __dirname + `/data/${this.pais}/classifications.yml`,
        'utf8',
      );
      const classification = load(classificationsData) as Classification[];

      const existingClassification = await Classification.findAll({
        where: { id: classification.map((a) => a.id) },
      });
      const classificationsToInsert = classification.filter(
        (a) =>
          !existingClassification.some(
            (existingClassification) => existingClassification.id === a.id,
          ),
      );

      if (classificationsToInsert.length > 0) {
        await Classification.bulkCreate(classificationsToInsert);
        logger.message('Datos de access insertados exitosamente');
      } else {
        logger.message('No hay data para insertar para tipos de clientes');
      }

      logger.message('Datos insertados exitosamente');
      return true;
    } catch (error: any) {
      logger.error(`Error al insertarData: ${error}`);
      return false;
    }
  }
}
