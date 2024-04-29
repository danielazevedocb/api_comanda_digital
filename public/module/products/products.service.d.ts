import { PrismaService } from 'src/database/database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        description: string;
        price: number;
        banner: string;
        category_id: string;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }>;
}
