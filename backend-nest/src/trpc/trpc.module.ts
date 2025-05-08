import { Module } from '@nestjs/common';
import { TrpcPanelController } from './trpc-panel.controller';
import { PokemonRouter } from './pokemon/pokemon.router';
import { TRPCModule } from 'nestjs-trpc';
import { TrpcLoggerMiddleware } from '../middleware/logger.middleware/trpc.logger.middleware';
import { AppContext } from './context/app.context';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile:
        process.env.NODE_ENV !== 'Production'
          ? './src/trpc/@generated'
          : undefined,
      context: AppContext,
    }),
  ],
  controllers: [TrpcPanelController],
  providers: [TrpcLoggerMiddleware, PokemonRouter, AppContext],
})
export class TrpcModule {}
