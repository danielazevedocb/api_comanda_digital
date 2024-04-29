import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/database/database.service';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    update(id: string, UpdateCategoryDto: UpdateCategoryDto): Promise<{
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
