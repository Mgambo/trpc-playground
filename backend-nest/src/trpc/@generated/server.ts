import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  pokemons: t.router({
    getPokemonById: publicProcedure.input(z.object({ id: z.string() })).output(z.object({
      name: z.string(),
      url: z.string(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getPokemons: publicProcedure.output(z.array(z.object({
      name: z.string(),
      url: z.string(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

