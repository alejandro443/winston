import { ZoneApplication } from 'src/core/application/Zone/ZoneApplication';
import {
  NewZoneDto,
  UpdateZoneDto,
} from 'src/core/shared/dto/Zone/zone_dto';
import { GetOneZoneUseCase } from './GetOneZoneUseCase';
import { GetAllZoneUseCase } from './GetAllZoneUseCase';
import { CreateZoneUseCase } from './CreateZoneUseCase';
import { UpdateZoneUseCase } from './UpdateZoneUseCase';
import { DeleteZoneUseCase } from './DeleteZoneUseCase';

export class ZoneApplicationService
  implements ZoneApplication
{
  constructor(
    private getOneUseCase?: GetOneZoneUseCase,
    private getAllUseCase?: GetAllZoneUseCase,
    private createUseCase?: CreateZoneUseCase,
    private updateUseCase?: UpdateZoneUseCase,
    private deleteUseCase?: DeleteZoneUseCase,
  ) {
    this.getOneUseCase = new GetOneZoneUseCase();
    this.getAllUseCase = new GetAllZoneUseCase();
    this.createUseCase = new CreateZoneUseCase();
    this.updateUseCase = new UpdateZoneUseCase();
    this.deleteUseCase = new DeleteZoneUseCase();
  }

  async getAllZone() {
    try {
      return this.getAllUseCase?.getAllZone();
    } catch (error: any) {
      return error;
    }
  }

  async getOneZone(id_zone: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneZone(id_zone);
    } catch (error: any) {
      return error;
    }
  }

  async createZone(
    zone: NewZoneDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createZone(zone);
    } catch (error: any) {
      return error;
    }
  }

  async updateZone(
    id_zone: number,
    zone: UpdateZoneDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateZone(id_zone, zone);
    } catch (error: any) {
      return error;
    }
  }

  async deleteZone(id_zone: number) {
    try {
      return this.deleteUseCase?.deleteZone(id_zone);
    } catch (error: any) {
      return error;
    }
  }
}
