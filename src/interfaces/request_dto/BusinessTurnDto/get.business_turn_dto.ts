import { PickType } from '@nestjs/swagger';
import { BusinessTurnDto } from '@src/core/shared/dto/BusinessTurn/business_turn_dto';

export class GetBusinessTurnRequestDto extends PickType(BusinessTurnDto, ['id'] as const) { }
