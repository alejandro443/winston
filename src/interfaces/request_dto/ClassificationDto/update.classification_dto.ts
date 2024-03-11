import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassificationRequestDto {
    
    @ApiProperty({
        description: 'Nombre de la clasificación',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Descripcion de la clasificación',
        type: String
    })
    description: string;

    @ApiProperty({
        description: 'Estado de la clasificación (Activo/Desactivado)',
        type: Boolean
    })
    status: boolean;
}