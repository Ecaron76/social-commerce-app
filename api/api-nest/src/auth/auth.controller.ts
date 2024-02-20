import { Body, Controller, Post, UseGuards, Delete, Req, Request  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

import { SignupDto } from 'dto/user/signupDto';
import { LoginDto } from 'dto/user/loginDto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post("signup") 
    signup(@Body()signupDto: SignupDto){
        return this.authService.signup(signupDto)
    }
    @Post("login")
    login(@Body()loginDto: LoginDto){
        return this.authService.login(loginDto)
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
        console.log('refreshed');
        return await this.authService.refreshToken(req.user);
    }
}