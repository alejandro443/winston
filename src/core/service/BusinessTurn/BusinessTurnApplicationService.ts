import { BusinessTurnApplication } from 'src/core/application/BusinessTurn/BusinessTurnApplication';
import {
  NewBusinessTurnDto,
  UpdateBusinessTurnDto,
} from 'src/core/shared/dto/BusinessTurn/business_turn_dto';
import { GetOneBusinessTurnUseCase } from './GetOneBusinessTurnUseCase';
import { GetAllBusinessTurnUseCase } from './GetAllBusinessTurnUseCase';
import { CreateBusinessTurnUseCase } from './CreateBusinessTurnUseCase';
import { UpdateBusinessTurnUseCase } from './UpdateBusinessTurnUseCase';
import { DeleteBusinessTurnUseCase } from './DeleteBusinessTurnUseCase';

export class BusinessTurnApplicationService
  implements BusinessTurnApplication
{
  constructor(
    private getOneUseCase?: GetOneBusinessTurnUseCase,
    private getAllUseCase?: GetAllBusinessTurnUseCase,
    private createUseCase?: CreateBusinessTurnUseCase,
    private updateUseCase?: UpdateBusinessTurnUseCase,
    private deleteUseCase?: DeleteBusinessTurnUseCase,
  ) {
    this.getOneUseCase = new GetOneBusinessTurnUseCase();
    this.getAllUseCase = new GetAllBusinessTurnUseCase();
    this.createUseCase = new CreateBusinessTurnUseCase();
    this.updateUseCase = new UpdateBusinessTurnUseCase();
    this.deleteUseCase = new DeleteBusinessTurnUseCase();
  }

  async getAllBusinessTurn() {
    try {
      return this.getAllUseCase?.getAllBusinessTurn();
    } catch (error: any) {
      return error;
    }
  }

  async getOneBusinessTurn(id_business_turn: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneBusinessTurn(id_business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async createBusinessTurn(
    business_turn: NewBusinessTurnDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createBusinessTurn(business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async updateBusinessTurn(
    id_business_turn: number,
    business_turn: UpdateBusinessTurnDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateBusinessTurn(id_business_turn, business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async deleteBusinessTurn(id_business_turn: number) {
    try {
      return this.deleteUseCase?.deleteBusinessTurn(id_business_turn);
    } catch (error: any) {
      return error;
    }
  }
}
