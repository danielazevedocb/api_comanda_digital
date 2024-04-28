import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email é obrigatório.' })
  @IsEmail({}, { message: 'O campo email deve ser um endereço de email válido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo password é obrigatório.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;

}
