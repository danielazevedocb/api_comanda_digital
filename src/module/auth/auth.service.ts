import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { PrismaService } from 'src/database/database.service'; // Caminho para o serviço do Prisma

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService, 
  ) {}

  async login(email: string, password: string) {
    // Utilizando Prisma para encontrar o usuário
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    // Verificação se o usuário existe
    if (!user) {
      throw new UnauthorizedException('Usuario não encontrado');
    }

    // Comparação das senhas
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Payload para o JWT
    const payload = {
      sub: user.id,
      user:{
        id: user.id,
        name: user.name,
        email: user.email
      }
    };

    // Geração do token
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
