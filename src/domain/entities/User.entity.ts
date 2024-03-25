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
  HasOne,
} from 'sequelize-typescript';

import * as bcrypt from 'bcrypt';
import { UserAccess } from './UserAccess.entity';
import { UserRol } from './UserRol.entity';
import { Worker } from './Worker.entity';
import { Client } from './Client.entity';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  declare user: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare consultant: boolean;

  @Column({
    type: DataType.DATE,
  })
  declare inactivation_date: string;

  @Column({
    type: DataType.DATE,
  })
  declare current_sign_in_at: string;

  @Column({
    type: DataType.DATE,
  })
  declare last_sign_in_at: string;

  @Column({
    type: DataType.TEXT,
  })
  declare current_sign_in_ip: string;

  @Column({
    type: DataType.TEXT,
  })
  declare last_sign_in_ip: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    unique: true,
  })
  declare unique_session_id: string;

  @Column({
    type: DataType.TEXT,
  })
  declare recovery_token: string;

  @HasMany(() => UserAccess, { foreignKey: 'user_id', sourceKey: 'id' })
  declare userAccesses: UserAccess[];

  @HasMany(() => UserRol, { foreignKey: 'user_id', sourceKey: 'id' })
  declare userRoles: UserRol[];

  @HasOne(() => Worker, 'user_id')
  declare worker: Worker;

  @HasOne(() => Client, 'user_id')
  declare client: Client;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;

  @BeforeCreate
  static async BeforeUpdateHook(usuario: User) {
    try {
      if (usuario.changed('password')) {
        usuario.password = await bcrypt.hashSync(usuario.password, 10);
      }
    } catch (error: any) {
      console.log(error);
    }
  }
}
