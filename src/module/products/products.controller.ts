import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';

import { ApiBearerAuth, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateCategoryDto } from '../categories/dto/update-category.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Product')
@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @ApiResponse({ status: 400, description: 'Produto já existir' })
  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.ProductsService.create(createProductDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.ProductsService.findAll();
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ProductsService.findOne(id);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.ProductsService.update(id, updateProductDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ProductsService.remove(id);
  }
}