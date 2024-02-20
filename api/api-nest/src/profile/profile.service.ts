import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from 'dto/profile/createProfileDto';
import { UpdateProfileDto } from 'dto/profile/updateProfileDto';

import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfile(userId: number, createProfileDto: CreateProfileDto){
    const { firstName, lastName } = createProfileDto;

        if (!firstName || !lastName) {
            throw new BadRequestException('Les champs "Prénom" et "Nom" sont obligatoires.');
        }

        return this.prismaService.profile.create({
            data: {
                user: { connect: { userId } },
                ...createProfileDto,
            },
        });
  }

  async updateProfile(userId: number, updateProfileDto: UpdateProfileDto) {
    const existingProfile = await this.prismaService.profile.findUnique({
      where: { userId },
    });

    if (!existingProfile) {
      throw new NotFoundException('Profil non trouvé');
    }
    
    const updatedProfile = await this.prismaService.profile.update({
      where: { userId },
      data: { ...updateProfileDto },
    });

    return updatedProfile;
  }

  async  getProfileByUserId(userId: number){
    const profile = await this.prismaService.profile.findUnique({
      where: {
        userId: userId,
      },
    });
    if(!profile){
      throw new NotFoundException('Profil introuvable');
    }
    return profile
  }
}
