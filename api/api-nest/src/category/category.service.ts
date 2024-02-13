import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService){}


    async getAllCategories(){
        return await this.prismaService.category.findMany()
    }

    async getOneCategory(slug: string){
        return await this.prismaService.category.findFirst({where:{slug}})
    }

}
