import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RestLoggerMiddleware } from './logger.middleware/rest.logger.middleware';

@Module({})
export class MiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RestLoggerMiddleware).forRoutes('*');
  }
}
