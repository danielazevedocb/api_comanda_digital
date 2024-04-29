import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiResponse({ status: 400, description: 'Produto já existir' })
  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Post()
  @UseGuards(JwtAuthGuard)  
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.ordersService.findAll();
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ordersService.findOne(id);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.ordersService.remove(id);
  }
}
