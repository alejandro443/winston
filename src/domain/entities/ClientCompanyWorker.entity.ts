import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ClientCompany } from './ClientCompany.entity';
import { Person } from './Person.entity';
import { CompanyArea } from './CompanyArea.entity';
import { CompanyPosition } from './CompanyPosition.entity';

@Table({ tableName: 'clients_company_workers' })
export class ClientCompanyWorker extends Model<ClientCompanyWorker> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => ClientCompany)
  @Column({
    field: 'client_company_id',
    allowNull: true,
  })
  declare client_company_id: number | null;

  @BelongsTo(() => ClientCompany, 'id')
  declare clientCompany: ClientCompany;

  @ForeignKey(() => Person)
  @Column({
    field: 'person_id',
    allowNull: true,
  })
  declare person_id: number | null;

  @BelongsTo(() => Person, 'id')
  declare person: Person;

  @ForeignKey(() => CompanyPosition)
  @Column({
    field: 'company_position_id',
    allowNull: true,
  })
  declare company_position_id: number | null;

  @BelongsTo(() => CompanyPosition, 'id')
  declare companyPosition: CompanyPosition;

  @ForeignKey(() => CompanyArea)
  @Column({
    field: 'company_area_id',
    allowNull: true,
  })
  declare company_area_id: number | null;

  @BelongsTo(() => CompanyArea, 'id')
  declare companyArea: CompanyArea;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
