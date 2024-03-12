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
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @ForeignKey(() => User)
  @Column({ field: "user_id" })
  user_id: number;

  @BelongsTo(() => Person, 'user_id')
  user: User;

  @ForeignKey(() => Person)
  @Column({ field: "person_identification" })
  person_identification: string;

  @BelongsTo(() => Person, 'person_identification')
  person: Person;

  @ForeignKey(() => TypeWorker)
  @Column({ field: "type_worker_code" })
  type_worker_code: string;

  @BelongsTo(() => TypeWorker, 'type_worker_code')
  type_worker: TypeWorker;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
