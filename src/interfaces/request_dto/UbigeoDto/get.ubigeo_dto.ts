import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SearchRequestDto {
  @ApiProperty({
    description: 'Termino de busqueda, Ubigeo - Departamento - Provincia - Distrito.',
    type: String,
  })
  @IsString()
  searchTerm?: string;
}
