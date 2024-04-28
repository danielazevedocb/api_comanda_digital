import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome da categoria é obrigatório' })
  @IsString({ message: 'O nome da categoria deve ser uma string' })
  name: string;
}
