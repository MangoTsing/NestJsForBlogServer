import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(8360);
}
bootstrap();
