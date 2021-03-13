import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecondaryModule } from './secondary.module';

async function bootstrap() {
  const app = await NestFactory.create(SecondaryModule);

  // swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Test swagger')
    .setDescription('API')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
