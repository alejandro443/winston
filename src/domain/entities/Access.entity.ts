import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany
} from 'sequelize-typescript';
import { AccessRol } from './AccessRol.entity';
import { UserAccess } from './UserAccess.entity';

@Table({ tableName: 'accesses' })
export class Access extends Model<Access> {
  @Column({ 
    type: DataType.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  })
  id: number;

  @Column({ 
    type: DataType.INTEGER 
  })
  father: number;

  @Column({ 
    type: DataType.TEXT 
  })
  name: string;

  @Column({ 
    type: DataType.TEXT 
  })
  description: string;

  @Column({ 
    type: DataType.TEXT 
  })
  url: string;

  @Column({ 
    type: DataType.TEXT 
  })
  icon: string;

  @Column({ 
    type: DataType.TEXT 
  })
  alt: string;

  @Column({ 
    type: DataType.INTEGER 
  })
  priority: number;

  @Column({ 
    type: DataType.BOOLEAN, 
    defaultValue: true 
  })
  status: boolean;

  @HasMany(() => AccessRol, { foreignKey: 'access_id', sourceKey: 'id' })
  accessRoles: AccessRol[];

  @HasMany(() => UserAccess, { foreignKey: 'access_id', sourceKey: 'id' })
  userAccesses: UserAccess[];

  @BelongsTo(() => Access, { as: 'parentAccess', foreignKey: 'father' })
  parent: Access;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
