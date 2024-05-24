import { Company } from '@src/domain/entities/Company.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { TypeChannel } from '@src/domain/entities/TypeChannel.entity';
import { TypeClient } from '@src/domain/entities/TypeClient.entity';
import { sequelize } from '@src/infraestructure/database/connection.database';
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
        ]
      })
      return data_client_porfolio;
    } catch (error: any) {
      return error;
    }
  }
}
