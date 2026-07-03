import { ConfigService } from '@nestjs/config';

export const appConfig = (configService: ConfigService) => ({
  port: configService.get('APP_PORT'),
  env: configService.get('APP_ENV'),
});