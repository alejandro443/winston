import {
  AllCompanyPositionDto,
  NewCompanyPositionDto,
  OneCompanyPositionDto,
  UpdateCompanyPositionDto,
} from 'src/core/shared/dto/CompanyPosition/company_position_dto';

export interface CompanyPositionApplication {
  getAllCompanyPosition(): Promise<Array<AllCompanyPositionDto>>;
  getOneCompanyPosition(code: any): Promise<OneCompanyPositionDto>;
  createCompanyPosition(company_position: NewCompanyPositionDto): Promise<OneCompanyPositionDto>;
  updateCompanyPosition(
    code: any,
    company_position: UpdateCompanyPositionDto,
  ): Promise<OneCompanyPositionDto>;
  deleteCompanyPosition(code: any): any;
}
