import { Module } from '@nestjs/common';
import { RestModule } from './app/rest/rest.module';
import { TrpcModule } from './trpc/trpc.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './config/database.config';
import { MiddlewareModule } from './middleware/middleware.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getDatabaseConfig(configService),
      inject: [ConfigService],
    }),
    MiddlewareModule,
    RestModule,
    TrpcModule,
  ],
})
export class AppModule {}
