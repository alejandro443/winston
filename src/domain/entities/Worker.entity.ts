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
import { TypeWorker } from './TypeWorker.entity';
import { Person } from './Person.entity';
import { User } from './User.entity';

@Table({ tableName: 'workers' })
export class Worker extends Model<Worker> {
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
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare person_id: number;

  @BelongsTo(() => Person, 'id')
  declare person: Person;

  @ForeignKey(() => TypeWorker)
  @Column({ field: 'type_worker_id' })
  declare type_worker_id: number;

  @BelongsTo(() => TypeWorker, 'id')
  declare typeWorker: TypeWorker;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'id')
  declare user: User;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
