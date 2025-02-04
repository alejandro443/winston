import { OmitType } from '@nestjs/swagger';
import { BusinessTurnDto } from '@src/core/shared/dto/BusinessTurn/business_turn_dto';

export class UpdateBusinessTurnRequestDto extends
  OmitType(BusinessTurnDto, ['id'] as const) { }