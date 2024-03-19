import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BeforeCreate,
  HasMany,
} from 'sequelize-typescript';

import * as bcrypt from 'bcrypt';
import { UserAccess } from './UserAccess.entity';
import { UserRol } from './UserRol.entity';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  user: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TEXT,
    unique: true,
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  consultant: boolean;

  @Column({
    type: DataType.DATE,
  })
  inactivation_date: string;

  @Column({
    type: DataType.DATE,
  })
  current_sign_in_at: string;

  @Column({
    type: DataType.DATE,
  })
  last_sign_in_at: string;

  @Column({
    type: DataType.TEXT,
  })
  current_sign_in_ip: string;

  @Column({
    type: DataType.TEXT,
  })
  last_sign_in_ip: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    unique: true,
  })
  unique_session_id: string;
 
  @Column({
    type: DataType.TEXT,
  })
  recovery_token: string;

  @HasMany(() => UserAccess, { foreignKey: 'user_id', sourceKey: 'id' })
  userAccesses: UserAccess[];

  @HasMany(() => UserRol, { foreignKey: 'user_id', sourceKey: 'id' })
  userRoles: UserRol[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BeforeCreate
  static async BeforeUpdateHook(usuario: User) {
    try {
      if (usuario.changed('password')) {
        usuario.password = await bcrypt.hashSync(usuario.password, 10);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
