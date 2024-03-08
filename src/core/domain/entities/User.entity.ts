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
  BeforeUpdate,
  BeforeCreate,
} from 'sequelize-typescript';

import bcrypt from 'bcrypt';

@Table
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
  })
  user: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.TEXT,
  })
  code: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  consultant: string;

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

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BeforeCreate
  static async BeforeCreateHook(usuario: User) {
    try {
      const salt = await bcrypt.genSalt(10);
      usuario.password = await bcrypt.hashSync(usuario.password, salt);
    } catch (error) {
      console.log(error)
    }
  }

  @BeforeUpdate
  static async BeforeUpdateHook(usuario: User) {
    try {
      const salt = await bcrypt.genSalt(10);
      usuario.password = await bcrypt.hashSync(usuario.password, salt);
    } catch (error) {
      console.log(error)
    }
  }
}
