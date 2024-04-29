import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as swaggerUI from 'swagger-ui-dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
    .setTitle('Comanda digital - API')
    .setDescription('API de autenticação')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Carregar recursos do Swagger UI via CDN
  const swaggerIndex = swaggerUI.getAbsoluteFSPath();
  app.use('/swagger', express.static(swaggerIndex));
  app.use('/swagger', express.static(swaggerUI.getAbsoluteFSPath('index.html')));
  app.use('/swagger', express.static(swaggerUI.getAbsoluteFSPath('swagger-ui.css')));
  app.use('/swagger', express.static(swaggerUI.getAbsoluteFSPath('swagger-ui-bundle.js')));
  app.use('/swagger', express.static(swaggerUI.getAbsoluteFSPath('swagger-ui-standalone-preset.js')));

  await app.listen(3000);
}
bootstrap();
