import { PhonesMetadata } from '../../infraestructure/shared/interfaces/PhonesMetadata';
import { DocumentsMetadata } from '../../infraestructure/shared/interfaces/DocumentsMetadata';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Worker } from './Worker.entity';
import { CompanyWorker } from './CompanyWorker.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'persons' })
export class Person extends Model<Person> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(), // Generar UUID al crear el registro
    allowNull: true,
    unique: true,
  })
  declare crypto_uuid: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;
 
  @Column({
    type: DataType.STRING,
  })
  declare trade_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare main_identification: string;

  @Column({
    type: DataType.DATEONLY,
  })
  declare birthdate: Date;

  @Column({
    type: DataType.STRING,
    unique: true,
    validate: { isEmail: true },
  })
  declare main_email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare main_phone: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  declare secondary_phone: string[];

  @Column({
    type: DataType.STRING,
  })
  declare gender: string;

  @Column({
    type: DataType.STRING,
  })
  declare marital_status: string;

  @Column({
    type: DataType.STRING,
  })
  declare occupation: string;

  @Column({
    type: DataType.STRING,
  })
  declare nationality: string;

  @Column({
    type: DataType.STRING,
  })
  declare country: string;

  @Column({
    type: DataType.STRING,
  })
  declare department: string;

  @Column({
    type: DataType.STRING,
  })
  declare province: string;

  @Column({
    type: DataType.STRING,
  })
  declare district: string;

  @Column({
    type: DataType.STRING,
  })
  declare main_direction: string;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  declare ubigeo: object;

  @Column({
    type: DataType.STRING,
  })
  declare photo: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare active: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare tradename: string;

  @Column({
    type: DataType.STRING,
  })
  declare condition: string;

  @Column({
    type: DataType.STRING,
  })
  declare plate: string;

  @Column({
    type: DataType.STRING,
  })
  declare licence: string;

  @Column({
    type: DataType.STRING,
  })
  declare profession: string;

  @Column({
    type: DataType.STRING,
  })
  declare denomination: string;

  @Column({
    type: DataType.STRING,
  })
  declare married_regimen: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare couple_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare type_identification: string;

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    allowNull: true
  })
  documents: DocumentsMetadata[];

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    allowNull: true
  })
  phones: PhonesMetadata[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @HasOne(() => Worker, { foreignKey: 'person_id', sourceKey: 'id' })
  declare worker: Worker;

  @HasMany(() => CompanyWorker, 'person_id')
  declare person: CompanyWorker[];

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
