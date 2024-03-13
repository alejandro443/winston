import { ApiProperty } from '@nestjs/swagger';

export class GetClientRequestDto {

    @ApiProperty({
        description: 'Código del cliente',
        type: String
    })
    code: string;
}