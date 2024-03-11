import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';
import { AccessRol } from './AccessRol.entity';
import { UserRol } from './UserRol.entity';

@Table({ tableName: 'roles' })
export class Rol extends Model<Rol> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
  })
  name: string;
  
  @Column({
    type: DataType.TEXT,
  })
  description: string;

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

  @ForeignKey(() => AccessRol)
  @Column({ field: 'accessRolId' })
  accessRolId: number

  @BelongsTo(() => AccessRol)
  access: AccessRol
  
  @ForeignKey(() => UserRol)
  @Column({ field: 'userRolId' })
  userRolId: number

  @BelongsTo(() => UserRol)
  user_rol: UserRol

}
