import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const existingProducts = await this.prisma.product.findUnique({
      where: { name: createProductDto.name },
    });
    if (existingProducts) {
      throw new ConflictException('Já existe um produto com este nome.');
    } else {
      const priceAsFloat = parseFloat(createProductDto.price);

      return await this.prisma.product.create({
        data: {
          ...createProductDto,
          price: priceAsFloat,
        },
      });
    }
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      select: {
        name: true,
        description: true,
        price: true,
        banner: true,
        category_id: true,
      },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      select: {
        name: true,
        price: true,
        description: true,
        banner: true,
        category_id: true,
      },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    const { category_id, price, ...data } = updateProductDto;

    let priceAsFloat: number | undefined;
    if (price !== undefined) {
      priceAsFloat = parseFloat(price);
    }

    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.description && { description: data.description }),
        ...(data.banner && { banner: data.banner }),

        ...(priceAsFloat !== undefined && { price: priceAsFloat }),
      },
    });

    return updatedProduct;
  }

  async remove(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }
    return await this.prisma.product.delete({ where: { id } });
  }
}
