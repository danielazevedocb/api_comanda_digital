import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiResponse({ status: 400, description: 'Produto já existir' })
  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.itemsService.findAll();
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.itemsService.findOne(id);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemsService.update(id, updateItemDto);
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.itemsService.remove(id);
  }
}
