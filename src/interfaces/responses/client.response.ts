import { ApiProperty } from '@nestjs/swagger';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';
import { PortfolioDto } from '@src/core/shared/dto/Client/portfolio_dto';
import { SearchByDocumentDto } from '@src/core/shared/dto/Client/search_by_document_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ClientResponse extends AppResponse {
  @ApiProperty({
    type: ClientDto,
    nullable: true,
  })
  data?: object;
}

export class ClientsResponse extends AppResponse {
  @ApiProperty({
    type: [ClientDto],
    nullable: true,
  })
  data?: ClientDto[];
}

export class PortfolioResponse extends AppResponse {
  @ApiProperty({
    type: [PortfolioDto],
    nullable: true,
  })
  data?: PortfolioDto[];
}

export class SearchByDocumentResponse extends AppResponse {
  @ApiProperty({
    type: SearchByDocumentDto,
    nullable: true,
  })
  data?: SearchByDocumentDto;
}