import { PersonApplication } from 'src/core/application/Person/PersonApplication';
import {
  NewPersonDto,
  UpdatePersonDto,
} from 'src/core/shared/dto/Person/person_dto';
import { GetOnePersonUseCase } from './GetOnePersonUseCase';
import { GetAllPersonUseCase } from './GetAllPersonUseCase';
import { CreatePersonUseCase } from './CreatePersonUseCase';
import { UpdatePersonUseCase } from './UpdatePersonUseCase';
import { DeletePersonUseCase } from './DeletePersonUseCase';

export class PersonApplicationService implements PersonApplication {
  constructor(
    private getOneUseCase?: GetOnePersonUseCase,
    private getAllUseCase?: GetAllPersonUseCase,
    private createUseCase?: CreatePersonUseCase,
    private updateUseCase?: UpdatePersonUseCase,
    private deleteUseCase?: DeletePersonUseCase,
  ) {
    this.getOneUseCase = new GetOnePersonUseCase();
    this.getAllUseCase = new GetAllPersonUseCase();
    this.createUseCase = new CreatePersonUseCase();
    this.updateUseCase = new UpdatePersonUseCase();
    this.deleteUseCase = new DeletePersonUseCase();
  }

  async getAllPerson() {
    try {
      return this.getAllUseCase?.getAllPerson();
    } catch (error: any) {
      return error;
    }
  }

  async getOnePerson(identification: string) {
    try {
      return this.getOneUseCase?.getOnePerson(identification);
    } catch (error: any) {
      return error;
    }
  }

  async createPerson(body: NewPersonDto) {
    try {
      return this.createUseCase?.createPerson(body);
    } catch (error: any) {
      return error;
    }
  }

  async updatePerson(identification: any, body: UpdatePersonDto) {
    try {
      return this.updateUseCase?.updatePerson(identification, body);
    } catch (error: any) {
      return error;
    }
  }

  async deletePerson(identification: string) {
    try {
      return this.deleteUseCase?.deletePerson(identification);
    } catch (error: any) {
      return error;
    }
  }
}
