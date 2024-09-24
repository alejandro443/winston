import * as fsPromises from 'fs';
import { load } from 'js-yaml';
import { Logger } from '../../../infraestructure/shared/log/Logger';
import { Rol } from '../../../domain/entities/Rol.entity';
import { Access } from '../../../domain/entities/Access.entity';
import { AccessRol } from '../../../domain/entities/AccessRol.entity';
import { TypeClient } from '../../../domain/entities/TypeClient.entity';
import { config } from 'dotenv';
import { Classification } from '../../../domain/entities/Classification.entity';
import { Group } from '../../../domain/entities/Group.entity';
import { User } from '../../../domain/entities/User.entity';
import * as bcrypt from 'bcrypt';
import { UserRol } from '../../../domain/entities/UserRol.entity';
import { Region } from '../../../domain/entities/Region.entity';
import { Country } from '../../../domain/entities/Country.entity';
import { Department } from '../../../domain/entities/Department.entity';
import { Function } from '../../../domain/entities/Function.entity';
import { Ubigeo } from '../../../domain/entities/Ubigeo.entity';
import { ListPrice } from '../../../domain/entities/ListPrice.entity';
import { createTypesChannel } from './types_channel.function';
import { createIssuableDocuments } from './issuable_documents.function';
import { createPersons } from './persons.function';

config();

const logger = new Logger('Insert Data');

async function createRoles({insert = false}) {
  if(!insert){
    return;
  }
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
}

async function createAccess({pais = '', insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE ACCESOS
  logger.message('INSERTAR ACCESOS');
  const accessData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/accesses.yml`,
    'utf8',
  );
  const access = load(accessData) as Access[];

  const existingAccesses = await Access.findAll({
    where: { id: access.map((a) => a.id) },
  });
  const accessesToInsert = access.filter(
    (a) =>
      !existingAccesses.some((existingAccess) => existingAccess.id === a.id),
  );

  if (accessesToInsert.length > 0) {
    await Access.bulkCreate(accessesToInsert);
    logger.message('Datos de access insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para accesos');
  }
}

async function createTypesClients({pais = '', insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE TIPOS DE CLIENTES
  logger.message('INSERTAR TIPOS DE CLIENTES');
  const typeClientsData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/types_clients.yml`,
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
}

async function createAccessesRoles({insert = false}) {
  if(!insert){
    return;
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
}

async function createClassifications({pais = '', insert = false}) {
  if(!insert){
    return;
  }
  // LEER Y CARGA DATOS DE CLASIFICACIONES
  logger.message('INSERTAR CLASIFICACIONES');
  const classificationsData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/classifications.yml`,
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
    logger.message('No hay data para insertar clasificaciones');
  }
}

async function createGroups({pais = '', insert = false}) {
  if(!insert){
    return;
  }
  // LEER Y CARGA DATOS DE GRUPOS
  logger.message('INSERTAR GROUPS');
  const groupsData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/classifications.yml`,
    'utf8',
  );
  const group = load(groupsData) as Group[];

  const existingGroup = await Group.findAll({
    where: { id: group.map((a) => a.id) },
  });
  const groupsToInsert = group.filter(
    (a) => !existingGroup.some((existingGroup) => existingGroup.id === a.id),
  );

  if (groupsToInsert.length > 0) {
    await Group.bulkCreate(groupsToInsert);
    logger.message('Datos de access insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para grupos');
  }
}

async function createUsers({insert = false}) {
  if(!insert){
    return;
  }
  // LEER Y CREAR USUARIOS
  logger.message('CREAR USUARIOS');
  const usersData = await fsPromises.readFileSync(
    __dirname + `/data/system/users.yml`,
    'utf8',
  );
  const user = load(usersData) as User[];

  const existingUser = await User.findAll({
    where: { user: user.map((a) => a.user) },
  });
  const usersToInsert = user.filter(
    (a) => !existingUser.some((existingUser) => existingUser.user === a.user),
  );

  await usersToInsert.map(async (user) => {
    user.password = await bcrypt.hashSync(user.password, 10);
  });

  if (usersToInsert.length > 0) {
    const createUser = await User.bulkCreate(usersToInsert);
    logger.message('Usuarios creados exitosamente');
    return createUser;
  } else {
    throw new Error('No hay data para crear en los usuarios.');
  }
}

async function createUsersRoles({insert = false}) {
  if(!insert){
    return;
  }
  logger.message('CREAR USUARIOS CON SUS ROLES');
  const userRolesData = await fsPromises.readFileSync(
    __dirname + `/data/system/users_roles.yml`,
    'utf8',
  );
  const userRoles = load(userRolesData) as UserRol[];

  const existingUserRol = await UserRol.findAll({
    where: { user_id: userRoles.map((a) => a.user_id) },
  });

  const userRolesToInsert = userRoles.filter(
    (a) =>
      !existingUserRol.some(
        (existingUserRoles) => existingUserRoles.id === a.id,
      ),
  );

  if (userRoles.length > 0) {
    await UserRol.bulkCreate(userRolesToInsert);
    logger.message('Usuarios creados exitosamente');
  } else {
    logger.message('No hay data para insertar para los usuarios.');
  }
}

async function createRegions({insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE REGIONES
  logger.message('INSERTAR REGIONES');
  const regionsData = await fsPromises.readFileSync(
    __dirname + `/data/system/regions.yml`,
    'utf8',
  );
  const regions = load(regionsData) as Region[];

  // Verificar si existen datos
  const existingRegions = await Region.findAll({
    where: { id: regions.map((region) => region.id) },
  });
  const regionToInsert = regions.filter(
    (region) =>
      !existingRegions.some(
        (existingRegion) => existingRegion.id === region.id,
      ),
  );

  if (regionToInsert.length > 0) {
    await Region.bulkCreate(regionToInsert);
    logger.message('Datos de regiones insertados exitosamente.');
  } else {
    logger.message('No hay data para insertar para regiones.');
  }
}

async function createCountries({insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE PAISES
  logger.message('INSERTAR PAISES');
  const countriesData = await fsPromises.readFileSync(
    __dirname + `/data/system/countries.yml`,
    'utf8',
  );
  const countries = load(countriesData) as Country[];

  // Verificar si existen datos
  const existingCountries = await Country.findAll({
    where: { id: countries.map((country) => country.id) },
  });
  const countryToInsert = countries.filter(
    (country) =>
      !existingCountries.some(
        (existingCountry) => existingCountry.id === country.id,
      ),
  );

  if (countryToInsert.length > 0) {
    await Country.bulkCreate(countryToInsert);
    logger.message('Datos de paises insertados exitosamente.');
  } else {
    logger.message('No hay data para insertar para paises.');
  }
}

async function createDepartments({pais = '', insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE DEPARTAMENTOS
  logger.message('INSERTAR DEPARTAMENTOS');
  const departmentsData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/departments.yml`,
    'utf8',
  );
  const departments = load(departmentsData) as Department[];

  // Verificar si existen datos
  const existingDepartments = await Department.findAll({
    where: { id: departments.map((department) => department.id) },
  });
  const departmentToInsert = departments.filter(
    (department) =>
      !existingDepartments.some(
        (existingDepartment) => existingDepartment.id === department.id,
      ),
  );

  if (departmentToInsert.length > 0) {
    await Department.bulkCreate(departmentToInsert);
    logger.message('Datos de departamentos insertados exitosamente.');
  } else {
    logger.message('No hay data para insertar para departamentos.');
  }
}

async function createFunctions({insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE FUNCIONES
  logger.message('INSERTAR TIPOS DE CLIENTES');
  const functionsData = await fsPromises.readFileSync(
    __dirname + `/data/system/functions.yml`,
    'utf8',
  );
  const functions = load(functionsData) as Function[];

  const existingFunctions = await Function.findAll({
    where: { id: functions.map((a) => a.id) },
  });
  const functionsToInsert = functions.filter(
    (a) =>
      !existingFunctions.some(
        (existingFunction) => existingFunction.id === a.id,
      ),
  );

  if (functionsToInsert.length > 0) {
    await Function.bulkCreate(functionsToInsert);
    logger.message('Datos de funciones insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para funciones');
  }
}

async function createRolesFunctions({insert = false}) {
  if(!insert){
    return;
  }

  logger.message('CREAR ROLES CON SUS FUNCIONES');
  const userRolesData = await fsPromises.readFileSync(
    __dirname + `/data/system/role_functions.yml`,
    'utf8',
  );
  const userRoles = load(userRolesData) as UserRol[];

  const existingUserRol = await UserRol.findAll({
    where: { user_id: userRoles.map((a) => a.user_id) },
  });

  const userRolesToInsert = userRoles.filter(
    (a) =>
      !existingUserRol.some(
        (existingUserRoles) => existingUserRoles.id === a.id,
      ),
  );

  if (userRoles.length > 0) {
    await UserRol.bulkCreate(userRolesToInsert);
    logger.message('Usuarios creados exitosamente');
  } else {
    logger.message('No hay data para insertar para los usuarios.');
  }
}

async function createUbigeos({pais = '', insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE UBIGEOS
  logger.message('INSERTAR UBIGEOS');
  const ubigeosData = await fsPromises.readFileSync(
    __dirname + `/data/${pais}/ubigeos.yml`,
    'utf8',
  );
  const ubigeo = load(ubigeosData) as Ubigeo[];

  const existingUbigeo = await Ubigeo.findAll({
    where: { id: ubigeo.map((a) => a.id) },
  });
  const ubigeosToInsert = ubigeo.filter(
    (a) => !existingUbigeo.some((existingUbigeo) => existingUbigeo.id === a.id),
  );

  if (ubigeosToInsert.length > 0) {
    await Ubigeo.bulkCreate(ubigeosToInsert);
    logger.message('Ubigeos insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para ubigeos');
  }
}

async function createListPrice({insert = false}) {
  if(!insert){
    return;
  }

  // LEER Y CARGA DATOS DE LISTAS DE PRECIOS
  logger.message('INSERTAR LISTAS DE PRECIOS');
  const listData = await fsPromises.readFileSync(
    __dirname + `/data/system/list_price.yml`,
    'utf8',
  );
  const listPrice = load(listData) as ListPrice[];

  const existingListPrice = await ListPrice.findAll({
    where: { id: listPrice.map((a) => a.id) },
  });
  const listPricesToInsert = listPrice.filter(
    (a) => !existingListPrice.some((existingListPrice) => existingListPrice.id === a.id),
  );

  if (listPricesToInsert.length > 0) {
    await ListPrice.bulkCreate(listPricesToInsert);
    logger.message('Ubigeos insertados exitosamente');
  } else {
    logger.message('No hay data para insertar para listas de precios');
  }
}

export class InserData {
  private pais: string;

  constructor(pais = 'pe') {
    this.pais = pais;
  }

  async run(type = 'all', seed = ''): Promise<boolean> {
    var functions = {
      'roles': (data) => createRoles(data),
      'access': (data) => createAccess(data),
      'type_clients': (data) => createTypesClients(data),
      'access_roles': (data) => createAccessesRoles(data),
      'classification': (data) => createClassifications(data),
      'groups': (data) => createGroups(data),
      'users': (data) => createUsers(data),
      'regions': (data) => createRegions(data),
      'countries': (data) => createCountries(data),
      'departments': (data) => createDepartments(data),
      'user_roles': (data) => createUsersRoles(data),
      'ubigeos': (data) => createUbigeos(data),
      'list_price': (data) => createListPrice(data),
      'type_channel': (data) => createTypesChannel(data),
      'issuable_document': (data) => createIssuableDocuments(data),
      'person': (data) => createPersons(data),
    }

    try {
      logger.initialize('COMENZAR INSERTAR DATA');
      switch (type) {
        case 'all':
          await Promise.all(
            Object.entries(functions).map(async ([key, func]) => {
              try {
                await func({insert: true, pais: this.pais});
              } catch (error) {
                console.error(`${key} failed:`, error);
                return { [key]: 'failed' };
              }
            })
          );
          break;
        case 'one':
          if(seed in functions){
            functions[seed]({insert: true, pais: this.pais})
          }else {
            console.log("No existe la funcion.");
            process.exit(1);
          }
          break;
        default:
          console.log('Sin parametros.')
          break;
      }


      // await createUsers();
        // .then((users) => createUsersRoles(users))
        // .catch((error) => {
        //   logger.error(error);
        // });
      // await createFunctions();
      // await createRolesFunctions();

      logger.message('Datos insertados exitosamente');
      return true;
    } catch (error: any) {
      logger.error(`Error al insertarData: ${error}`);
      return false;
    }
  }
}
