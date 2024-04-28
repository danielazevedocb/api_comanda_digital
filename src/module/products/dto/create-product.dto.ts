import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, Length, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "name" não pode estar vazio' })
  @Length(1, 255, {
    message: 'O campo "name" deve ter entre 1 e 255 caracteres',
  })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "price" não pode estar vazio' })
  price: string; 

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "description" não pode estar vazio' })
  @Length(1, 1000, {
    message: 'O campo "description" deve ter entre 1 e 1000 caracteres',
  })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "banner" não pode estar vazio' })
  @IsString({ message: 'O campo "banner" deve ser uma string' })
  banner: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "category_id" não pode estar vazio' })
  @IsUUID('4', { message: 'O campo "category_id" deve ser um UUID válido' })
  category_id: string;
}
