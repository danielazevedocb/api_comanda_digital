import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Comanda Digital - API')
    .setDescription('API de autenticação')
    .setVersion('1.0')
    .addTag('tag')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {});

  // Use a porta fornecida pelo ambiente ou padrão para 3000
  const port = process.env.PORT || 3000;

  // Escuta na porta fornecida pelo ambiente
  await app.listen(port);
}

bootstrap();
