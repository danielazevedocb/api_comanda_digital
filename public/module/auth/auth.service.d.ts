import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/database.service';
export declare class AuthService {
    private jwtService;
    private prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
