import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController  {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registro usuarios nuevos' })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(201)
  async registerUser(@Body() body: { username: string; password: string }): Promise<{ message: string }> {
    // await this.usersService.registerUser(body.username, body.password);
    return { message: 'Usuario registrado correctamente' };
  }
}