import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { UserDto } from '@src/core/shared/dto/User/user_dto';
import { IsNumber, IsString } from 'class-validator';

class UserResponseDto implements Omit<UserDto, 'password'> {}
class UserWithPersonResponseDto {
  @ApiProperty({
    description: 'UUID del Usuario.',
    type: String,
  })
  @IsString()
  user_uuid?: string;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  @IsString()
  user?: string;

  @ApiProperty({
    description: 'Nombre de la persona creada para el usuario.',
    type: String,
  })
  @IsString()
  person?: string;
  
  @ApiProperty({
    description: 'UUID de la persona asignada al usuario.',
    type: String,
  })
  @IsString()
  person_uuid?: string;
}

export class UserResponse extends AppResponse {
  @ApiProperty({
    type: UserResponseDto,
    nullable: true,
  })
  data?: object;
}

export class UserWithPersonResponse extends AppResponse {
  @ApiProperty({
    type: UserWithPersonResponseDto,
    nullable: true,
  })
  data?: UserWithPersonResponseDto;
}

export class UsersResponse extends AppResponse {
  @ApiProperty({
    type: [UserResponseDto],
    nullable: true,
  })
  data?: UserDto[];
}



// Sellers
class SellersResponseDto {
  @ApiProperty({
    description: 'Id del usuario.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  @IsString()
  user?: string;
}

export class SellersResponse extends AppResponse {
  @ApiProperty({
    type: [SellersResponseDto],
    nullable: true,
  })
  data?: SellersResponseDto[];
}
