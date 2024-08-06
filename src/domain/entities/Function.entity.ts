import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';

@Table({ tableName: 'functions' })
export class Function extends Model<Function> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare controller: string;

  @Column({
    type: DataType.STRING,
  })
  declare action: string;

  @Column({
    type: DataType.STRING
  })
  declare agroup: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

}
