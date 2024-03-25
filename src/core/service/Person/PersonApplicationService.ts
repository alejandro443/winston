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

  async getOnePerson(worker_code: string) {
    try {
      return this.getOneUseCase?.getOnePerson(worker_code);
    } catch (error: any) {
      return error;
    }
  }

  async createPerson(worker: NewPersonDto) {
    try {
      return this.createUseCase?.createPerson(worker);
    } catch (error: any) {
      return error;
    }
  }

  async updatePerson(code: any, worker: UpdatePersonDto) {
    try {
      return this.updateUseCase?.updatePerson(code, worker);
    } catch (error: any) {
      return error;
    }
  }

  async deletePerson(code: string) {
    try {
      return this.deleteUseCase?.deletePerson(code);
    } catch (error: any) {
      return error;
    }
  }
}
