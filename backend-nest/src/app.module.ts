import { Module } from '@nestjs/common';
import { RestModule } from './app/rest/rest.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [RestModule, TrpcModule],
})
export class AppModule {}
