import { PortfolioRepository } from 'src/domain/repositories/ClientRepository/PortfolioRepository';

export class PortfolioService {
  constructor(private repository?: PortfolioRepository) {
    this.repository = new PortfolioRepository();
  }

  async getAllPortfolio() {
    try {
      const portfolio_data: any = await this.repository?.portfolioClients();

      const portfolio_dto: any = portfolio_data.map((client_data: any) => {
        const client: any = client_data.dataValues;
        let objectEntity: object = {};

        if (client.client_person != null) {
          objectEntity = {
            type_entity: 'person',
            channel: client.channel_name,
            name: client.person_names,
            main_direction: client.person_direction,
            province: client.province,
            district: client.district,
            department: client.department,
            main_email: client.person_email,
            main_identification: client.person_identification,
            main_phone: client.person_phone,
          };
        }

        if (client.client_company != null) {
          objectEntity = {
            type_entity: 'company',
            channel: client.channel_name,
            name: client.company_name,
            main_direction: client.company_direction,
            province: client.province,
            district: client.district,
            department: client.department,
            main_email: client.company_email,
            main_identification: client.company_identification,
            main_phone: client.company_phone,
          };
        }

        return {
          client_id: client.client_id,
          client_code: client.client_code,
          status: client.client_status,
          type_client: client.type_name,
          ...objectEntity,
        };
      });
      return portfolio_dto;
    } catch (error: any) {
      return error;
    }
  }
}
