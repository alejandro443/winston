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
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  code: string;
  
  @Column({
    type: DataType.STRING,
  })
  name: string;
 
  @Column({
    type: DataType.STRING,
  })
  description: string;
  
  @Column({ 
    type: DataType.ARRAY(DataType.STRING)
  })
  types: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => ClientCompanyWorker, 'company_position_id')
  clientCompanyWorker: ClientCompanyWorker[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
