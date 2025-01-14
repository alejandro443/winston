import { PortfolioRepository } from 'src/domain/repositories/ClientRepository/PortfolioRepository';

export class PortfolioService {
  constructor(private repository?: PortfolioRepository) {
    this.repository = new PortfolioRepository();
  }

  async getAllPortfolio() {
    try {
      const portfolio_data: any = await this.repository?.portfolioClients();

      const portfolio_dto: any = await portfolio_data.map((client_data: any) => {
        const client: any = client_data.toJSON();
        let objectEntity: object = {};

        if (client.type_entity == 'person') {
          objectEntity = {
            type_entity: 'person',
            channel: client.typeChannel ? client.typeChannel.name : '',
            name: `${client.person.name} ${client.person.last_name}`,
            last_name: client.person.last_name,
            main_direction: client.person.main_direction,
            province: client.person.province,
            district: client.person.district,
            department: client.person.department,
            main_email: client.person.main_email,
            main_identification: client.person.main_identification,
            main_phone: client.person.main_phone,
            business_turn_name: client.businessTurn? client.businessTurn.name : '', 
          };
        }

        if (client.type_entity == 'company') {
          objectEntity = {
            type_entity: 'company',
            channel: client.typeChannel ? client.typeChannel.name : '',
            name: client.company.name,
            last_name: '',
            main_direction: client.company.main_direction,
            province: client.company.province,
            district: client.company.district,
            department: client.company.department,
            main_email: client.company.main_email,
            main_identification: client.company.main_identification,
            main_phone: client.company.main_phone,
            business_turn_name: client.businessTurn? client.businessTurn.name : '', 
          };
        }

        return {
          client_id: client.id,
          client_code: client.code,
          status: client.status,
          type_client: client.typeClient.name,
          ...objectEntity,
        };
      });

      return portfolio_dto;
    } catch (error: any) {
      return error;
    }
  }
}
