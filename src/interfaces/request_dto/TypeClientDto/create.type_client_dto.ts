import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeClientRequestDto {
    
    @ApiProperty({
        description: 'Nombre del tipo de cliente',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Descripcion del tipo de cliente',
        type: String
    })
    description: string;

    @ApiProperty({
        description: 'Estado del tipo de cliente (Activo/Desactivado)',
        default: true,
        type: Boolean
    })
    status: boolean;
}