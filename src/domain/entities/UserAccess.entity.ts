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
import { User } from './User.entity';
import { Access } from './Access.entity';

@Table({ tableName: 'users_accesses' })
export class UserAccess extends Model<UserAccess> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @ForeignKey(() => Access)
  @Column({
    type: DataType.INTEGER,
  })
  declare access_id: number;

  @BelongsTo(() => Access)
  declare rol: Access;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare user_id: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
