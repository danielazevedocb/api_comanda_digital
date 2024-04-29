import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/database.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
