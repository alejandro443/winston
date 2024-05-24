import { PortfolioRepository } from 'src/domain/repositories/ClientRepository/PortfolioRepository';

export class PortfolioService {
  constructor(private repository?: PortfolioRepository) {
    this.repository = new PortfolioRepository();
  }

  async getAllPortfolio() {
    try {
      const portfolio_data: any = await this.repository?.portfolioClients();

      const portfolio_dto: any = portfolio_data.map((client_data: any) => {
        const client: any = client_data.toJSON();
        let objectEntity: object = {};

        if (client.type_entity == 'person') {
          objectEntity = {
            type_entity: 'person',
            channel: client.typeChannel.name,
            name: client.person.name,
            lastname: client.person.lastname,
            main_direction: client.person.direction,
            province: client.person.province,
            district: client.person.district,
            department: client.person.department,
            main_email: client.person.email,
            main_identification: client.person.main_identification,
            main_phone: client.person.main_phone,
          };
        }

        if (client.type_entity == 'company') {
          objectEntity = {
            type_entity: 'company',
            channel: client.typeChannel.name,
            name: client.company.name_company,
            lastname: '',
            main_direction: client.company.main_direction,
            province: client.company.province,
            district: client.company.district,
            department: client.company.department,
            main_email: client.company.main_email,
            main_identification: client.company.main_identification,
            main_phone: client.company.main_phone,
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
