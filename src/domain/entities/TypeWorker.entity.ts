import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo
} from 'sequelize-typescript';
import { Worker } from './Worker.entity';

@Table({ tableName: 'types_workers' })
export class TypeWorker extends Model<TypeWorker> {
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
    primaryKey: true
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @BelongsTo(() => Worker, 'type_worker_code')
  worker: Worker;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
