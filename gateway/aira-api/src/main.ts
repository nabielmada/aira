import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AIRA Gateway API')
    .setDescription('Initial Version')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/v1', app, document);

  app.enableCors({
    origin: '*', // Bolehkan semua asal (sementara)
  });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
