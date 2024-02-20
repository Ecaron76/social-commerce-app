export interface Profile {
    id: number;
    pseudo: string;
    firstName: string;
    lastName: string;
    dateNais?: Date;
    genre: string;
    ville: string;
    codePostal: string;
    bio: string;
    image: string;
}