import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { LoginDto } from 'dto/user/loginDto';
import { SignupDto } from 'dto/user/signupDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService, 
        private readonly jwtService : JwtService, 
        private readonly configService: ConfigService){}
        

    async signup(signupDto: SignupDto){
        const {email, password} = signupDto
        const user = await this.prismaService.user.findUnique({where: {email: email}})
        if (user) throw new ConflictException("L'utilisateur éxiste déjà")
        const hash = await bcrypt.hash(password,10)
        await this.prismaService.user.create(
            {data: {email, password: hash}
        })
        return {data: "Utilisateur enregistré avec succès"}
    }

    async login(loginDto: LoginDto){
        const {email, password} = loginDto
        const user = await this.prismaService.user.findUnique({where: {email: email}})
        if (!user) throw new NotFoundException("L'utilisateur n'éxiste pas")
        const match = await bcrypt.compare(password, user.password)
        if (!match) throw new UnauthorizedException("Mot de passe incorrecte")
        const payload = {
            sub: user.userId,
            email: user.email
        } 
        const token = this.jwtService.sign(payload, {
            expiresIn:"24h", 
            secret: this.configService.get("SECRET_KEY")
        })
        return {
            token, 
            user: {
                email: user.email,
            }
        }
    }
}
