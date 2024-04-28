import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'; 
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/database.service';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret:   process.env.SECRET,
      signOptions: { expiresIn: process.env.EXPIRATION },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
