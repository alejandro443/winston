import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ClientCompanyWorker } from './ClientCompanyWorker.entity';

@Table({ tableName: 'company_positions' })
export class CompanyPosition extends Model<CompanyPosition> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare types: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => ClientCompanyWorker, 'company_position_id')
  declare clientCompanyWorker: ClientCompanyWorker[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
