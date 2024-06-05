import { CompanyPositionApplication } from 'src/core/application/CompanyPosition/CompanyPositionApplication';
import {
  NewCompanyPositionDto,
  UpdateCompanyPositionDto,
} from 'src/core/shared/dto/CompanyPosition/company_position_dto';
import { GetOneCompanyPositionUseCase } from './GetOneCompanyPositionUseCase';
import { GetAllCompanyPositionUseCase } from './GetAllTCompanyPositionUseCase';
import { CreateCompanyPositionUseCase } from './CreateCompanyPositionUseCase';
import { UpdateCompanyPositionUseCase } from './UpdateCompanyPositionUseCase';
import { DeleteCompanyPositionUseCase } from './DeleteCompanyPositionUseCase';

export class CompanyPositionApplicationService implements CompanyPositionApplication {
  constructor(
    private getOneUseCase?: GetOneCompanyPositionUseCase,
    private getAllUseCase?: GetAllCompanyPositionUseCase,
    private createUseCase?: CreateCompanyPositionUseCase,
    private updateUseCase?: UpdateCompanyPositionUseCase,
    private deleteUseCase?: DeleteCompanyPositionUseCase,
  ) {
    this.getOneUseCase = new GetOneCompanyPositionUseCase();
    this.getAllUseCase = new GetAllCompanyPositionUseCase();
    this.createUseCase = new CreateCompanyPositionUseCase();
    this.updateUseCase = new UpdateCompanyPositionUseCase();
    this.deleteUseCase = new DeleteCompanyPositionUseCase();
  }

  async getAllCompanyPosition() {
    try {
      return this.getAllUseCase?.getAllCompanyPosition();
    } catch (error: any) {
      return error;
    }
  }

  async getOneCompanyPosition(company_position_code: string): Promise<any> {
    try {
      return this.getOneUseCase?.getOneCompanyPosition(company_position_code);
    } catch (error: any) {
      return error;
    }
  }

  async createCompanyPosition(company_position: NewCompanyPositionDto): Promise<any> {
    try {
      return this.createUseCase?.createCompanyPosition(company_position);
    } catch (error: any) {
      return error;
    }
  }

  async updateCompanyPosition(
    code: any,
    company_position: UpdateCompanyPositionDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateCompanyPosition(code, company_position);
    } catch (error: any) {
      return error;
    }
  }

  async deleteCompanyPosition(code: string) {
    try {
      return this.deleteUseCase?.deleteCompanyPosition(code);
    } catch (error: any) {
      return error;
    }
  }
}
