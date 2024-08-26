import { UbigeoRepository } from 'src/domain/repositories/UbigeoRepository/UbigeoRepository';

export class UbigeoService {
  constructor(private repository?: UbigeoRepository) {
    this.repository = new UbigeoRepository();
  }

  async searchSensitive(searchTerm: string) {
    try {
      return this.repository?.searchSensitive(searchTerm);
    } catch (error: any) {
      return error;
    }
  }
}
