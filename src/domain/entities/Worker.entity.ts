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
  HasMany,
} from 'sequelize-typescript';
import { TypeWorker } from './TypeWorker.entity';
import { Person } from './Person.entity';
import { User } from './User.entity';
import { Client } from './Client.entity';
import { ClientCompanyWorker } from './ClientCompanyWorker.entity';

@Table({ tableName: 'workers' })
export class Worker extends Model<Worker> {
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
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  person_id: number;

  @BelongsTo(() => Person, 'id')
  person: Person;

  @ForeignKey(() => TypeWorker)
  @Column({ field: 'type_worker_id' })
  type_worker_id: number;

  @BelongsTo(() => TypeWorker, 'id')
  typeWorker: TypeWorker;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_id: number;

  @BelongsTo(() => User, 'id')
  user: User;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
