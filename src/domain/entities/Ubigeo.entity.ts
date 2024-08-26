import {
  Table,
  Column,
  Model,
  DataType
} from 'sequelize-typescript';

@Table({ tableName: 'ubigeos' })
export class Ubigeo extends Model<Ubigeo> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  ubigeo: number;

  @Column({
    type: DataType.STRING,
  })
  department: string;
  
  @Column({
    type: DataType.STRING,
  })
  province: string;
  
  @Column({
    type: DataType.STRING,
  })
  district: string;
  
  @Column({
    type: DataType.DOUBLE,
  })
  altitud: number;
  
  @Column({
    type: DataType.DOUBLE,
  })
  latitud: number;
  
  @Column({
    type: DataType.DOUBLE,
  })
  longitud: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  status: boolean;
}
