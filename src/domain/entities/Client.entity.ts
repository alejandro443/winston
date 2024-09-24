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
  HasMany,
} from 'sequelize-typescript';
import { TypeClient } from './TypeClient.entity';
import { Classification } from './Classification.entity';
import { Group } from './Group.entity';
import { Person } from './Person.entity';
import { User } from './User.entity';
import { ClientDeliveryPoint } from './ClientDeliveryPoint.entity';
import { ClientDeliveryMethod } from './ClientDeliveryMethod.entity';
import { Company } from './Company.entity';
import { TypeChannel } from './TypeChannel.entity';
import { CommercialSection } from './CommercialSection';
import { MethodPayment } from './MethodPayment.entity';
import { WayToPay } from './WayToPay.entity';
import { BusinessTurn } from './BusinessTurn.entity';
import { BusinessSubcategory } from './BusinessSubcategory.entity';
import { Zone } from './Zone.entity';
import { ListPrice } from './ListPrice.entity';
import { IssuableDocument } from './IssuableDocument.entity';

@Table({ tableName: 'clients' })
export class Client extends Model<Client> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare code: string;

  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    allowNull: true,
  })
  declare user_id: number;

  @BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
  declare user: User;

  @ForeignKey(() => Person)
  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  entity_id: number;

  @BelongsTo(() => Person, { foreignKey: 'entity_id', constraints: false })
  declare person: Person;

  @BelongsTo(() => Company, { foreignKey: 'entity_id', constraints: false })
  declare company: Company;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare type_entity: string;

  @ForeignKey(() => Classification)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare classification_id: number;

  @BelongsTo(() => Classification, 'classification_id')
  declare classification: Classification;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare group_id: number;

  @BelongsTo(() => Group, 'group_id')
  declare group: Group;

  @ForeignKey(() => TypeClient)
  @Column({
    field: 'type_client_id',
    allowNull: false,
  })
  declare type_client_id: number;

  @BelongsTo(() => TypeClient, 'type_client_id')
  declare typeClient: TypeClient;

  @ForeignKey(() => TypeChannel)
  @Column({
    field: 'type_channel_id',
    allowNull: true,
  })
  declare type_channel_id: number;

  @BelongsTo(() => TypeChannel, 'type_channel_id')
  declare typeChannel: TypeChannel;
  
  @ForeignKey(() => CommercialSection)
  @Column({
    field: 'commercial_section_id',
    allowNull: true,
  })
  declare commercial_section_id: number;

  @BelongsTo(() => CommercialSection, 'commercial_section_id')
  declare CommercialSection: CommercialSection;

  @HasMany(() => ClientDeliveryPoint, 'client_id')
  declare clientDeliveryPoints: ClientDeliveryPoint[];

  @HasMany(() => ClientDeliveryMethod, 'client_id')
  declare clientDeliveryMethods: ClientDeliveryMethod[];

  @ForeignKey(() => MethodPayment)
  @Column({
    field: 'method_payment_id',
    allowNull: true,
  })
  declare method_payment_id: number;

  @BelongsTo(() => MethodPayment, 'method_payment_id')
  declare methodPayment: MethodPayment;

  @ForeignKey(() => WayToPay)
  @Column({
    field: 'way_to_pay_id',
    allowNull: true,
  })
  declare way_to_pay_id: number;

  @BelongsTo(() => WayToPay, 'way_to_pay_id')
  declare wayToPay: WayToPay;

  @ForeignKey(() => BusinessTurn)
  @Column({
    field: 'business_turn_id',
    allowNull: true,
  })
  declare business_turn_id: number;

  @BelongsTo(() => BusinessTurn, 'business_turn_id')
  declare businessTurn: BusinessTurn;
  
  @ForeignKey(() => BusinessSubcategory)
  @Column({
    field: 'business_subcategory_id',
    allowNull: true,
  })
  declare business_subcategory_id: number;

  @BelongsTo(() => BusinessSubcategory, 'business_subcategory_id')
  declare businessSubcategory: BusinessSubcategory;

  @ForeignKey(() => IssuableDocument)
  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    field: 'issuable_documents_ids',
    allowNull: true,
  })
  declare issuable_documents_ids: number[];

  @BelongsTo(() => IssuableDocument, 'issuable_documents_id')
  declare issuableDocument: IssuableDocument;

  @ForeignKey(() => Zone)
  @Column({
    field: 'zone_id',
    allowNull: true,
    defaultValue: 1
  })
  declare zone_id: number;

  @BelongsTo(() => Zone, 'id')
  declare zone: Zone;

  @ForeignKey(() => ListPrice)
  @Column({
    field: 'list_price_id',
    allowNull: true,
    defaultValue: 1
  })
  declare list_price_id: number;

  @BelongsTo(() => ListPrice, 'id')
  declare listPrice: ListPrice;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'seller_id',
    allowNull: true
  })
  declare seller_id: number;

  @BelongsTo(() => User, { foreignKey: 'seller_id', as: 'seller' })
  declare seller: User;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare status: boolean;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @DeletedAt
  declare deleted_at: Date;
}
