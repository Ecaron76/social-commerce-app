import { Body, Controller, Post,Get,Patch, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from 'dto/profile/createProfileDto';
import { UpdateProfileDto } from 'dto/profile/updateProfileDto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post('create')
    async createProfile(@Request() req, @Body() createProfileDto: CreateProfileDto) {
        const userId = req.user.userId; 
        return this.profileService.createProfile(userId, createProfileDto);
    }

    @Patch('update')
    async updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
      const userId = req.user.userId;
      return this.profileService.updateProfile(userId, updateProfileDto);
    }
    
    @UseGuards(JwtGuard)
    @Get('/user')
    async getProfileByUserId(@Request() req){
      const userId = req.user.sub;
      return this.profileService.getProfileByUserId(userId)
    }
}
