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
  id: number;

  @ForeignKey(() => ClientCompany)
  @Column({ 
    field: 'client_company_id',
    allowNull: true
  })
  client_company_id: number | null;

  @BelongsTo(() => ClientCompany, 'id')
  clientCompany: ClientCompany;

  @ForeignKey(() => Person)
  @Column({ 
    field: 'person_id',
    allowNull: true
  })
  person_id: number | null;

  @BelongsTo(() => Person, 'id')
  person: Person;
 
  @ForeignKey(() => CompanyPosition)
  @Column({ 
    field: 'company_position_id',
    allowNull: true
  })
  company_position_id: number | null;

  @BelongsTo(() => CompanyPosition, 'id')
  companyPosition: CompanyPosition;

  @ForeignKey(() => CompanyArea)
  @Column({ 
    field: 'company_area_id',
    allowNull: true
  })
  company_area_id: number | null;

  @BelongsTo(() => CompanyArea, 'id')
  companyArea: CompanyArea;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
