import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

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
    primaryKey: true
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

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
