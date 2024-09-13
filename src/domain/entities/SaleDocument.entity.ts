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
import { SubmissionStatus } from '@src/infraestructure/shared/enums/SubmissionStatus';
import { Sale } from './Sale.entity';
import { IssuableDocument } from './IssuableDocument.entity';

@Table({ tableName: 'sale_documents' })
export class SaleDocument extends Model<SaleDocument> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Sale)
  @Column({
    field: 'sale_id',
    allowNull: false,
    unique: true
  })
  declare sale_id: number;

  @BelongsTo(() => Sale, 'sale_id')
  declare sale: Sale;

  @Column({ type: DataType.STRING })
  declare type_document: string;

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
  })
  declare correlative: number;

  @Column({
    type: DataType.ENUM,
    values: Object.values(SubmissionStatus),
    allowNull: false
  })
  declare submission_status: SubmissionStatus;

  @Column({
    type: DataType.STRING,
  })
  declare path_pdf: string;

  @Column({
    type: DataType.STRING,
  })
  declare path_xml: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
