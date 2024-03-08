import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';
import { AccessRol } from './AccessRol.entity';
import { UserAccess } from './UserAccess.entity';

@Table
export class Access extends Model<Access> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Access)
  @Column
  fatherId: number;

  @BelongsTo(() => Access, 'fatherId')
  father: Access;

  @Column({
    type: DataType.TEXT
  })
  description: string;

  @Column({
    type: DataType.TEXT,
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
    defaultValue: true,
  })
  status: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @ForeignKey(() => AccessRol)
  @Column({ field: 'accessRolId' })
  accessRolId: number

  @BelongsTo(() => AccessRol)
  accessRol: AccessRol
  
  @ForeignKey(() => UserAccess)
  @Column({ field: 'userAccessId' })
  userAccessId: number

  @BelongsTo(() => UserAccess)
  userAccess: UserAccess
}
