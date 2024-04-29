import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const existingOrder = await this.prisma.order.findFirst({
      where: {
        table: createOrderDto.table,
      },
    });
    if (existingOrder) {
      throw new ConflictException('Já existe uma order para esta mesa.');
    } else {
      return this.prisma.order.create({ data: createOrderDto });
    }
  }

  async findAll() {
    try {
      const orders = await this.prisma.order.findMany({
        select: {
          id: true,
          table: true,
          status: true,
          name: true,
          draft: true,
        },
      });

      return orders;
    } catch (error) {
      console.error('Erro ao buscar as order:', error);
      throw new Error('Ocorreu um erro ao buscar as order.');
    }
  }

  async findOne(id: string) {
    const order = this.prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        table: true,
        status: true,
        draft: true,
      },
    });
    if (!order) {
      throw new NotFoundException('Order não encontrada.');
    }
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      select: {
        table: true,
        status: true,
        draft: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order não encontrada.');
    }

    try {
      return await this.prisma.order.update({
        where: { id },
        data: { ...updateOrderDto, table: undefined },
      });
    } catch (error) {
      console.error('Erro ao atualizar order:', error);
      throw new Error('Ocorreu um erro ao atualizar o pedido.');
    }
  }

  async remove(id: string) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException('Order não encontrada.');
    }
    return await this.prisma.order.delete({ where: { id } });
  }
}
