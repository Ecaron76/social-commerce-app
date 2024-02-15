import { Body, Controller, Post, UseGuards, Delete, Req  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { SignupDto } from 'dto/user/signupDto';
import { LoginDto } from 'dto/user/loginDto';

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
}