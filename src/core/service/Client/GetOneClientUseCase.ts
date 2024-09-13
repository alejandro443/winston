import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class GetOneClientUseCase {
  constructor(
    private clientService?: ClientService
  ) {
    this.clientService = new ClientService();
  }

  async getOneClient(id: number) {
    try {
      const response: any = await this.clientService?.getOnePortfolioClient(id);
      return response
    } catch (error: any) {
      return error;
    }
  }

  async getOnePortfolioClient(client_id: number) {
    try {
      const portfolio_one_data: any = await this.clientService?.getOnePortfolioClient(client_id);
      console.log(portfolio_one_data)

      const portfolio_one_dto: any = await portfolio_one_data.map((client_data: any) => {
        const client: any = client_data.toJSON();
        let objectEntity: object = {};

        if (client.type_entity == 'person') {
          objectEntity = {
            id: client.id,
            code: client.code,
            user_id: client.user_id,
            entity_id: client.entity_id,
            type_entity: client.type_entity,
            classification_id: client.classification_id,
            group_id: client.group_id,
            type_client_id: client.type_client_id,
            type_channel_id: 1,
            commercial_section_id: 1,
            method_payment_id: client.method_payment_id,
            way_to_pay_id: client.way_to_pay_id,
            business_turn_id: client.business_turn_id,
            business_subcategory_id: client.business_subcategory_id,
            issuable_documents_ids: client.issuable_documents_ids,
            zone_id: client.zone_id,
            list_price_id: client.list_price_id,
            status: client.status,
            entity: {
              ...client.person
            }
          };
        }

        if (client.type_entity == 'company') {
          objectEntity = {
            id: client.id,
            code: client.code,
            user_id: client.user_id,
            entity_id: client.entity_id,
            type_entity: client.type_entity,
            classification_id: client.classification_id,
            group_id: client.group_id,
            type_client_id: client.type_client_id,
            type_channel_id: 1,
            commercial_section_id: 1,
            method_payment_id: client.method_payment_id,
            way_to_pay_id: client.way_to_pay_id,
            business_turn_id: client.business_turn_id,
            business_subcategory_id: client.business_subcategory_id,
            issuable_documents_ids: client.issuable_documents_ids,
            zone_id: client.zone_id,
            list_price_id: client.list_price_id,
            status: client.status,
            entity: {
              ...client.company
            }
          };
        }

        return objectEntity;
      });

      return portfolio_one_dto;
    } catch (error: any) {
      return error;
    }
  }
}
