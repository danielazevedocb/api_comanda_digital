import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateItemDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "amount" não pode estar vazio.' })
  @IsInt({ message: 'O campo "amount" deve ser um número inteiro.' })
  amount: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "order_id" não pode estar vazio.' })
  @IsUUID('4', { message: 'O campo "order_id" deve ser um UUID válido.' })
  order_id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo "product_id" não pode estar vazio.' })
  @IsUUID('4', { message: 'O campo "product_id" deve ser um UUID válido.' })
  product_id: string;
}
