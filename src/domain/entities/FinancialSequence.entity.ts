import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { IssuableDocument } from './IssuableDocument.entity';

@Table({ tableName: 'financial_sequences' })
export class FinancialSequence extends Model<FinancialSequence> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => IssuableDocument)
  @Column({
    field: 'issuable_document_id',
    allowNull: false,
  })
  declare issuable_document_id: number;

  @BelongsTo(() => IssuableDocument, 'id')
  declare issuableDocument: IssuableDocument;
  
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare serie: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  declare starting_correlative: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare ending_correlative: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  declare current_correlative: number;

  @Column({
    type: DataType.INTEGER, 
    defaultValue: 0 
  })
  declare version: number;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
