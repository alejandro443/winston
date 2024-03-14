import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'clients_companies' })
export class Classification extends Model<Classification> {
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
  main_identification: string;

  @Column({
    type: DataType.STRING,
  })
  type_identification: string;

  @Column({
    type: DataType.STRING,
  })
  name_company: string;

  @Column({
    type: DataType.STRING,
  })
  main_direction: string;

  @Column({
    type: DataType.STRING,
  })
  zip_code: string;
  
  @Column({
    type: DataType.STRING,
  })
  country: string;

  @Column({
    type: DataType.STRING,
  })
  department: string;
  
  @Column({
    type: DataType.STRING,
  })
  province: string;
  
  @Column({
    type: DataType.STRING,
  })
  district: string;

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
