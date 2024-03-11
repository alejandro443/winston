import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany
} from 'sequelize-typescript';
import { Access } from './Access.entity';
import { Rol } from './Rol.entity';

@Table({ tableName: 'accesses_roles' })
export class AccessRol extends Model<AccessRol> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

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

  @ForeignKey(() => Access)
  @Column({ field: 'accessId' })
  accessId: number

  @BelongsTo(() => Access)
  access: Access
  
  @ForeignKey(() => Rol)
  @Column({ field: 'rolId' })
  rolId: number

  @BelongsTo(() => Rol)
  rol: Rol
}
