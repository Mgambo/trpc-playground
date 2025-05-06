import { Module } from '@nestjs/common';
import { TrpcPanelController } from './trpc-panel.controller';
import { PokemonRouter } from './pokemon/pokemon.router';
import { TRPCModule } from 'nestjs-trpc';
import { LoggerMiddleware } from './middlewares/logger.middleware';
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
  providers: [LoggerMiddleware, PokemonRouter, AppContext],
})
export class TrpcModule {}
