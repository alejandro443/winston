import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDocumentRequestDto {
    
    @ApiProperty({
        description: 'Nombre del tipo de documento',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Descripcion del tipo de documento',
        type: String
    })
    description: string;

    @ApiProperty({
        description: 'Estado del tipo de documento (Activo/Desactivado)',
        default: true,
        type: Boolean
    })
    status: boolean;
}