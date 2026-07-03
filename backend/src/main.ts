import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix('api/v1');

  if (configService.get('SWAGGER_ENABLE') === 'true') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('妆伴 MakeupPal API')
      .setDescription('妆伴项目后端API文档')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(configService.get('SWAGGER_PATH'), app, document);
  }

  await app.listen(configService.get('APP_PORT') || 3000);
}

bootstrap();