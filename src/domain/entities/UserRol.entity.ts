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
import { Rol } from './Rol.entity';
import { User } from './User.entity';

@Table({ tableName: 'users_roles' })
export class UserRol extends Model<UserRol> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Rol)
  @Column({
    type: DataType.INTEGER,
  })
  declare rol_id: number;

  @BelongsTo(() => Rol)
  declare rol: Rol;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare user_id: number;

  @BelongsTo(() => User)
  declare user: User;

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
