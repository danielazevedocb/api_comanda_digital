import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O numero da mesa não pode estar vazio.' })
  @IsInt({ message: 'O numero da mesa deve ser um número inteiro.' })
  table: number;

  @ApiProperty()
  @IsBoolean({ message: 'O campo "status" deve ser um booleano.' })
  @IsOptional()
  status?: boolean;

  @ApiProperty()
  @IsBoolean({ message: 'O campo "draft" deve ser um booleano.' })
  @IsOptional()
  draft?: boolean;

  @ApiProperty()
  @IsString({ message: 'O campo "name" deve ser uma string.' })
  @IsOptional()
  name?: string;
}