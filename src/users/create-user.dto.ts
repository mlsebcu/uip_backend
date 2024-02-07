import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'miusuario', description: 'Ingresa tu usuario' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Ingresa contraseña de tu usuario' })
  password: string;
}