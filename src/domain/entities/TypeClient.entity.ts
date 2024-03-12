import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Client } from './Client.entity';

@Table({ tableName: 'types_clients' })
export class TypeClient extends Model<TypeClient> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING
  })
  name: string;
  
  @Column({
    type: DataType.STRING,
  })
  description: string;
  
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    unique: true
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @BelongsTo(() => Client, 'type_client_code')
  client: Client;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
