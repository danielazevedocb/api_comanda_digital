import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class CategoriesService {
  
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.prisma.category.findUnique({
      where: { name: createCategoryDto.name },
    });
    if (existingCategory) {
      throw new ConflictException('Já existe uma categoria com este nome.');
    } else {
      return await this.prisma.category.create({ data: createCategoryDto });
    }
  }
  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id }, select: { id: true, name: true } });
    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }
    return category;
  }

  async update(id: string, UpdateCategoryDto: UpdateCategoryDto) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      select: { id: true, name: true },
    });
    if (!category) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return await this.prisma.category.update({
      where: { id },
      data: UpdateCategoryDto,
    });
  }

  async remove(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return await this.prisma.category.delete({ where: { id } });
  }
}
