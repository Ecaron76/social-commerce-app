import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    getAllCategories() {
        return this.categoryService.getAllCategories();
    }

    @Get(':slug')
    getOneCategory(@Param("slug") categorySlug: string) {
        return this.categoryService.getOneCategory(categorySlug);
    }
}
