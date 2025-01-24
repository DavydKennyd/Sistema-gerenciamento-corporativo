import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly staffService: StaffService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    // Procura o staff no banco de dados
    const staff = await this.staffService.findOne(username);
    if (!staff) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Compara a senha fornecida com a senha armazenada (criptografada)
    const passwordMatches = await bcrypt.compare(pass, staff.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Gera o payload para o token JWT
    const payload = { sub: staff.userId, username: staff.username };
    
    // Retorna o token de acesso
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
