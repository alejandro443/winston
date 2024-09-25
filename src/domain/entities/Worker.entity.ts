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
    allowNull: false,
  })
  declare person_id: number;

  @BelongsTo(() => Person, 'person_id')
  declare person: Person;

  @ForeignKey(() => TypeWorker)
  @Column({ 
    field: 'type_worker_id',
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare type_worker_id: number;

  @BelongsTo(() => TypeWorker, 'type_worker_id')
  declare typeWorker: TypeWorker;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare user_id: number;

  @BelongsTo(() => User, 'user_id')
  declare user: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare person_identification: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
