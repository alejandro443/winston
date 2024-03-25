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
  declare id: number;

  @ForeignKey(() => Rol)
  @Column({
    type: DataType.INTEGER,
  })
  declare rol_id: number;

  @BelongsTo(() => Rol)
  declare rol: Rol;

  @ForeignKey(() => Access)
  @Column({
    type: DataType.INTEGER,
  })
  declare access_id: number;

  @BelongsTo(() => Access)
  declare access: Access;

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
