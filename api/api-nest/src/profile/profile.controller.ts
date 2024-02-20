import { Body, Controller, Post,Get,Patch, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from 'dto/profile/createProfileDto';
import { UpdateProfileDto } from 'dto/profile/updateProfileDto';

@Controller('profile')
@UseGuards(AuthGuard('jwt'))
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
    
    @Get('/user')
    async getProfileByUserId(@Request() req){
      const userId = req.user.userId;
      return this.profileService.getProfileByUserId(userId)
    }
}
