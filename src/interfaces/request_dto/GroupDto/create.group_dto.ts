import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupRequestDto {
    
    @ApiProperty({
        description: 'Nombre del grupo',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Descripcion del grupo',
        type: String
    })
    description: string;

    @ApiProperty({
        description: 'Estado del grupo (Activo/Desactivado)',
        default: true,
        type: Boolean
    })
    status: boolean;
}