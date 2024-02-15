import { IsString, IsOptional } from 'class-validator';

export class CreateProfileDto {
    firstName: string;
    lastName: string;
    ville?: string;
    codePostal?: string;
    bio?: string;
    image?: string;
  }
