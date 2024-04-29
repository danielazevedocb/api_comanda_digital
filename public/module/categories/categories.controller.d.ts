import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
    }>;
    update(id: string, updateUserDto: UpdateCategoryDto): Promise<{
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
