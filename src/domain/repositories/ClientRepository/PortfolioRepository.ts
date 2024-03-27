import { sequelize } from '@src/infraestructure/database/connection.database';
import { Client } from 'src/domain/entities/Client.entity';

export class PortfolioRepository {
  constructor() {}
  async portfolioClients() {
    try {
      return await sequelize.query(
        `SELECT 
          clients.id AS client_id, 
          clients.code AS client_code, 
          clients.status AS client_status, 
          clients.person_id AS client_person, 
          clients.company_id AS client_company, 
          types_clients.name AS type_name, 
          persons.main_telephone AS person_phone, 
          persons.main_identification AS person_identification, 
          CONCAT(persons.name, ' ', persons.lastname) AS person_names , 
          CONCAT(persons.direction, '/', persons.department) AS person_direction, 
          persons.email AS person_email, 
          companies.main_identification AS company_identification,
          companies.name_company AS company_name,
          companies.main_phone AS company_phone,
          companies.main_direction AS company_direction,
          companies.main_email AS company_email
        FROM clients
        INNER JOIN types_clients ON clients.type_client_id = types_clients.id
        LEFT JOIN persons ON clients.person_id = persons.id
        LEFT JOIN companies ON clients.company_id = companies.id
        WHERE clients.deleted_at IS NULL`,
        {
          model: Client,
          mapToModel: true,
        },
      );
    } catch (error: any) {
      return error;
    }
  }
}
