import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { BusinessTurn } from '@src/domain/entities/BusinessTurn.entity';
import { Company } from '@src/domain/entities/Company.entity';
import { IssuableDocument } from '@src/domain/entities/IssuableDocument.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { TypeChannel } from '@src/domain/entities/TypeChannel.entity';
import { TypeClient } from '@src/domain/entities/TypeClient.entity';
import { Zone } from '@src/domain/entities/Zone.entity';
import { Client } from 'src/domain/entities/Client.entity';

export class PortfolioRepository {
  constructor() {}
  async portfolioClients() {
    try {
      var data_client_porfolio: any = await Client.findAll({
        include: [
          {model: Person, required: false},
          {model: Company, required: false},
          {model: TypeClient, required: false},
          {model: TypeChannel, required: false},
          {model: BusinessTurn, required: false},
        ]
      })
      return data_client_porfolio;
    } catch (error: any) {
      return error;
    }
  }

  async portfolioOneClient(client_id: number) {
    try {
      var data_client_porfolio: any = await Client.findAll({
        include: [
          {model: Person, required: false},
          {model: Company, required: false},
          {model: TypeClient, required: false},
          {model: TypeChannel, required: false},
          {model: BusinessTurn, required: false},
          {model: Zone, required: false},
          {model: IssuableDocument, required: false}
        ],
        where: {id: client_id}
      })

      return data_client_porfolio;
    } catch (error: any) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
}
