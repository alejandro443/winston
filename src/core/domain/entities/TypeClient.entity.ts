import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';

@Table
export class TypeClient extends Model<TypeClient> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true
  })
  name: string;
  
  @Column({
    type: DataType.STRING,
  })
  description: string;
  
  @Column({
    type: DataType.STRING,
  })
  code: string;

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
