import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
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
  declare id: number;

  @Column({
    type: DataType.TEXT,
  })
  declare name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => AccessRol, { foreignKey: 'rol_id' })
  declare accessRoles: AccessRol[];

  @HasMany(() => UserRol, { foreignKey: 'rol_id' })
  declare userRoles: UserRol[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
