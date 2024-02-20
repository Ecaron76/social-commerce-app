import { IsString, IsOptional } from 'class-validator';

export class CreateProfileDto {
    pseudo: string;
    firstName: string;
    lastName: string;
    dateNais: Date;
    genre: string;
    ville?: string;
    codePostal?: string;
    bio?: string;
    image?: string;
  }
