import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('port');
  await app.listen(PORT, async () => {
    console.log(`🚀 Server on port ${PORT}`);
  });
}
bootstrap();
