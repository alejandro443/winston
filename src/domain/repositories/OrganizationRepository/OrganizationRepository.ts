import {
  NewOrganizationDto,
  UpdateOrganizationDto,
} from 'src/core/shared/dto/Organization/organization_dto';
import { Organization } from 'src/domain/entities/Organization.entity';

export class OrganizationRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Organization.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Organization.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(organization: NewOrganizationDto) {
    try {
      return Organization.create(organization);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, organization: UpdateOrganizationDto) {
    try {
      return Organization.update(organization, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Organization.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
