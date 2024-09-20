import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { ClientDeliveryPointService } from '@src/domain/services/ClientDeliveryPointService/ClientDeliveryPointService';
import { CompanyWorkerService } from '@src/domain/services/CompanyWorkerService/CompanyWorkerService';
import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class GetOneClientUseCase {
  constructor(
    private clientService?: ClientService,
    private companyWorkerService?: CompanyWorkerService,
    private clientDeliveryPoints?: ClientDeliveryPointService
  ) {
    this.clientService = new ClientService();
    this.companyWorkerService = new CompanyWorkerService();
    this.clientDeliveryPoints = new ClientDeliveryPointService()
  }

  async getOneClient(id: number) {
    try {
      const response: any = await this.clientService?.getOnePortfolioClient(id);
      return response
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }

  async getOnePortfolioClient(client_id: number) {
    try {
      const portfolio_one_data: any = await this.clientService?.getOnePortfolioClient(client_id);

      if(!portfolio_one_data?.length) { return new ClientApplicationError('No encontrado.', 'NOT_FOUND')}

      const delivery_points: any = await this.clientDeliveryPoints.getAllClientDeliveryPointByClient(client_id)

      const portfolio_one_dto: any = portfolio_one_data.map(async (client_data: any) => {
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
            type_channel_id: client.type_channel_id,
            commercial_section_id: client.commercial_section_id,
            method_payment_id: client.method_payment_id,
            way_to_pay_id: client.way_to_pay_id,
            business_turn_id: client.business_turn_id,
            business_subcategory_id: client.business_subcategory_id,
            issuable_documents_ids: client.issuable_documents_ids,
            zone_id: client.zone_id,
            list_price_id: client?.list_price_id,
            seller_id: client.seller_id,
            seller_user: client.seller_id ? client.seller.user : '',
            status: client.status,
            entity: {
              ...client.person
            },
            delivery_points: delivery_points
          };
        }

        if (client.type_entity == 'company') {
          const company_worker: any = await this.companyWorkerService?.getAllCompanyWorkerByCompany(client_data.entity_id)

          objectEntity = {
            id: client.id,
            code: client.code,
            user_id: client.user_id,
            entity_id: client.entity_id,
            type_entity: client.type_entity,
            classification_id: client.classification_id,
            group_id: client.group_id,
            type_client_id: client.type_client_id,
            type_channel_id: client.type_channel_id,
            commercial_section_id: client.commercial_section_id,
            method_payment_id: client.method_payment_id,
            way_to_pay_id: client.way_to_pay_id,
            business_turn_id: client.business_turn_id,
            business_subcategory_id: client.business_subcategory_id,
            issuable_documents_ids: client.issuable_documents_ids,
            zone_id: client.zone_id,
            list_price_id: client?.list_price_id,
            status: client.status,
            seller_id: client.seller_id,
            seller_user: client.seller_id ? client.seller.user : '',
            entity: {
              ...client.company
            },
            managers: company_worker,
            delivery_points: delivery_points
          };
        }

        return objectEntity;
      });

      const data_response: any = await Promise.all(portfolio_one_dto);

      return data_response;
    } catch (error: any) {
      throw new ClientApplicationError(error);
    }
  }
}
