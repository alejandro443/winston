import { AccessApplicationError } from '@src/core/shared/error/AccessApplicationError';
import { AccessRepository } from '@src/domain/repositories/ClassificationRepository copy/AccessRepository';
import { AccessDto } from 'src/core/shared/dto/Access/access_dto';

export class AccessService {
  constructor(private repository?: AccessRepository) {
    this.repository = new AccessRepository();
  }

  async getOneAccess(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new AccessApplicationError(error.message);
    }
  }

  async getAllAccess() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new AccessApplicationError(error.message);
    }
  }

  async createAccess(access: AccessDto) {
    try {
      return this.repository?.create(access);
    } catch (error: any) {
      throw new AccessApplicationError(error.message);
    }
  }

  async updateAccess(id: number, access: AccessDto) {
    try {
      return this.repository?.update(id, access);
    } catch (error: any) {
      throw new AccessApplicationError(error.message);
    }
  }

  async deleteAccess(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new AccessApplicationError(error.message);
    }
  }
}
