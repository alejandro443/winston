import { ZoneDetailApplication } from 'src/core/application/ZoneDetail/ZoneDetailApplication';
import { GetAllZoneDetailUseCase } from './GetAllZoneDetailUseCase';
import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';

export class ZoneDetailApplicationService
  implements ZoneDetailApplication
{
  constructor(
    private getAllUseCase?: GetAllZoneDetailUseCase
  ) {
    this.getAllUseCase = new GetAllZoneDetailUseCase();
  }

  async getAllZoneDetail() {
    try {
      return this.getAllUseCase?.getAllZoneDetail();
    } catch (error: any) {
      throw new ZoneDetailApplicationError(error);
    }
  }
}
