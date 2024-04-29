import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }>;
    findAll(): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        amount: number;
        order_id: string;
        product_id: string;
    }>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }>;
}
