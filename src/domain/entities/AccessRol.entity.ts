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
import { Access } from './Access.entity';

@Table({ tableName: 'accesses_roles' })
export class AccessRol extends Model<AccessRol> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Rol)
  @Column({
    type: DataType.INTEGER,
  })
  rol_id: number;

  @BelongsTo(() => Rol)
  rol: Rol;

  @ForeignKey(() => Access)
  @Column({
    type: DataType.INTEGER,
  })
  access_id: number;

  @BelongsTo(() => Access)
  access: Access;

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
