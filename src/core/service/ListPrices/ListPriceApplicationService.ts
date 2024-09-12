import { ListPriceApplication } from 'src/core/application/ListPrice/ListPriceApplication';
import {
  NewDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPrice/list_price_dto';
import { GetOneUseCase } from './GetOneUseCase';
import { GetAllUseCase } from './GetAllUseCase';
import { CreateUseCase } from './CreateUseCase';
import { UpdateUseCase } from './UpdateUseCase';
import { DeleteUseCase } from './DeleteUseCase';
import { GetUseCaseActives } from './GetUseCaseActives';

export class ListPriceApplicationService
  implements ListPriceApplication
{
  constructor(
    private getOneUseCase?: GetOneUseCase,
    private getAllUseCase?: GetAllUseCase,
    private createUseCase?: CreateUseCase,
    private updateUseCase?: UpdateUseCase,
    private deleteUseCase?: DeleteUseCase,
    private getUseCaseActives?: GetUseCaseActives,
  ) {
    this.getOneUseCase = new GetOneUseCase();
    this.getAllUseCase = new GetAllUseCase();
    this.createUseCase = new CreateUseCase();
    this.updateUseCase = new UpdateUseCase();
    this.deleteUseCase = new DeleteUseCase();
    this.getUseCaseActives = new GetUseCaseActives();
  }

  async getAllListPrice() {
    try {
      return this.getAllUseCase?.getAllListPrice();
    } catch (error: any) {
      return error;
    }
  }

  async getOneListPrice(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneListPrice(id);
    } catch (error: any) {
      return error;
    }
  }

  async createListPrice(
    body: NewDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createListPrice(body);
    } catch (error: any) {
      return error;
    }
  }

  async updateListPrice(
    id: number,
    body: UpdateDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateListPrice(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async deleteListPrice(id: number) {
    try {
      return this.deleteUseCase?.deleteListPrice(id);
    } catch (error: any) {
      return error;
    }
  }

  async getListPriceActives(type: string) {
    try {
      if(type == "complete") {
        return this.getUseCaseActives?.getListPriceActives();
      }
     
      if(type == "count") {
        return this.getUseCaseActives?.getListPriceActivesCount();
      }
    } catch (error: any) {
      return error;
    }
  }
}
