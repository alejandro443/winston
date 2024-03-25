import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { AccessRol } from './AccessRol.entity';
import { UserAccess } from './UserAccess.entity';

@Table({ tableName: 'accesses' })
export class Access extends Model<Access> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare father: number;

  @Column({
    type: DataType.TEXT,
  })
  declare name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.TEXT,
  })
  declare url: string;

  @Column({
    type: DataType.TEXT,
  })
  declare icon: string;

  @Column({
    type: DataType.TEXT,
  })
  declare alt: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare priority: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasMany(() => AccessRol, { foreignKey: 'access_id', sourceKey: 'id' })
  declare accessRoles: AccessRol[];

  @HasMany(() => UserAccess, { foreignKey: 'access_id', sourceKey: 'id' })
  declare userAccesses: UserAccess[];

  @BelongsTo(() => Access, { as: 'parentAccess', foreignKey: 'father' })
  declare parent: Access;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
