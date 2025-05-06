import { z } from 'zod';

export const pokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const pokemonsSchema = z.array(pokemonSchema);
