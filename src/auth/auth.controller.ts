import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode,   HttpStatus, } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() body: any) {
    console.log('Body recebido:', body);
    const { username, password } = body;
    return this.authService.signIn(username, password);
  }

}
