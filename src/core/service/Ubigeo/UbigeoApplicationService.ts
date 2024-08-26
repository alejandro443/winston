import { UbigeoApplication } from 'src/core/application/Ubigeo/UbigeoApplication';
import { SearchSensitiveUbigeoUseCase } from './SearchSensitiveUseCase';

export class UbigeoApplicationService
  implements UbigeoApplication {
  constructor(
    private searchSensitiveUseCase?: SearchSensitiveUbigeoUseCase
  ) {
    this.searchSensitiveUseCase = new SearchSensitiveUbigeoUseCase();
  }

  async searchSensitive(searchTerm: string) {
    try {
      const response: any =
        await this.searchSensitiveUseCase?.searchSensitive(searchTerm);

      return response.map((ubigeo: any) => ({ ...ubigeo }));
    } catch (error: any) {
      return error;
    }
  }
}
