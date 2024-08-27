import { ApiProperty } from "@nestjs/swagger";

export class ImageDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  image: any; // La propiedad puede ser de tipo `any` si estás solo cargando un archivo
}