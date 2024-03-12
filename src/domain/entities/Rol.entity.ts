import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany
} from 'sequelize-typescript';
import { AccessRol } from './AccessRol.entity';
import { UserRol } from './UserRol.entity';

@Table({ tableName: 'roles' })
export class Rol extends Model<Rol> {
  @Column({ 
    type: DataType.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  })
  id: number;

  @Column({ 
    type: DataType.TEXT 
  })
  name: string;

  @Column({ 
    type: DataType.TEXT 
  })
  description: string;

  @Column({ 
    type: DataType.BOOLEAN, 
    defaultValue: true 
  })
  status: boolean;

  @HasMany(() => AccessRol, 'rol_id')
  accessRols: AccessRol[];

  @HasMany(() => UserRol, 'rol_id')
  userRols: UserRol[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
