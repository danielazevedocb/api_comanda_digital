import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createItemDto: CreateItemDto) {
    const exitingItem = await this.prisma.item.findFirst({
      where: { product_id: createItemDto.product_id },
    });
    if (exitingItem) {
      throw new ConflictException('Já existe um item com este id.');
    } else {
      return this.prisma.item.create({ data: createItemDto });
    }
  }
  async findAll() {
    return this.prisma.item.findMany();
  }

  async findOne(id: string) {
    const item = await this.prisma.item.findFirst({
      where: { id },
      select: {
        id: true,
        amount: true,
        order_id: true,
        product_id: true,
      },
    });
    if (!item) {
      throw new NotFoundException('Item não encontrado.');
    }
    return item;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.prisma.item.update({
      where: { id },
      data: {
        amount: updateItemDto.amount,
      },
    });
    if(!item) {
      throw new NotFoundException('Item não encontrado.');
    }
    return item 
  }

  async remove(id: string) {
   const item = await this.prisma.item.delete({ where: { id } });

   if(!item) {
    throw new NotFoundException('Item não encontrado.');
  }
  return item
  }
}
