import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração CORS - Ajuste conforme necessário
  app.enableCors({
    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove os dados que não estão nos DTOs
    forbidNonWhitelisted: true, // Lança erro se contiver dados que não estão nos DTOs
    transform: true, // Transforma o input nos tipos dos DTOs
  }));

  const config = new DocumentBuilder()
    .setTitle('Comanda Digital - API')
    .setDescription('API de autenticação')
    .setVersion('1.0')
    .addBearerAuth( // Configuração para suporte de autenticação JWT
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Uso de variável de ambiente para a porta
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}

bootstrap();
