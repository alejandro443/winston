import { PhonesMetadata } from '@src/infraestructure/shared/interfaces/PhonesMetadata';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { DocumentsMetadata } from 'src/infraestructure/shared/interfaces/DocumentsMetadata';

@Table({ tableName: 'persons' })
export class Person extends Model<Person> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  lastname: string;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    unique: true,
  })
  main_identification: string;

  @Column({
    type: DataType.DATEONLY,
  })
  birthdate: Date;

  @Column({
    type: DataType.STRING,
    unique: true,
    validate: { isEmail: true },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  main_telephone: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  secondary_phone: string[];

  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
  })
  marital_status: string;

  @Column({
    type: DataType.STRING,
  })
  occupation: string;

  @Column({
    type: DataType.STRING,
  })
  nationality: string;

  @Column({
    type: DataType.STRING,
  })
  country: string;

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
    type: DataType.STRING,
  })
  direction: string;

  @Column({
    type: DataType.STRING,
  })
  ubigeo: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  active: boolean;

  @Column({
    type: DataType.STRING,
  })
  tradename: string;

  @Column({
    type: DataType.STRING,
  })
  condition: string;

  @Column({
    type: DataType.STRING,
  })
  plate: string;

  @Column({
    type: DataType.STRING,
  })
  licence: string;

  @Column({
    type: DataType.STRING,
  })
  profession: string;

  @Column({
    type: DataType.STRING,
  })
  denomination: string;

  @Column({
    type: DataType.STRING,
  })
  married_regimen: string;

  @Column({
    type: DataType.INTEGER,
  })
  couple_id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  main_document_type: string;

  // @Column({ 
  //   type: DataType.ARRAY(DataType.JSON),
  //   allowNull: true
  // })
  // documents: [DocumentsMetadata];

  // @Column({ 
  //   type: DataType.ARRAY(DataType.JSON),
  //   allowNull: true
  // })
  // phones: [PhonesMetadata];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
