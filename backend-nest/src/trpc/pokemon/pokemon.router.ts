import { Router, Query, UseMiddlewares, Input } from 'nestjs-trpc';
import { pokemonSchema, pokemonsSchema } from './pokemon.schema';
import { TrpcLoggerMiddleware } from '../../middleware/logger.middleware/trpc.logger.middleware';
import { z } from 'zod';

@Router({ alias: 'pokemons' })
@UseMiddlewares(TrpcLoggerMiddleware)
export class PokemonRouter {
  constructor() {}

  @Query({
    input: z.object({ id: z.string() }),
    output: pokemonSchema,
  })
  getPokemonById(@Input('id') id: string) {
    console.log(id);
    return {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };
  }

  @Query({ output: pokemonsSchema })
  getPokemons() {
    return [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
      {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
      },
    ];
  }
}
