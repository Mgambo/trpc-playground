"use client";
import { Pokemon } from "@/types/pokemon";
// import { Pokemon } from "@/types/pokemon";
import { useTRPC } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

const useGetPokemons = () => {
  const trpc = useTRPC();
  console.log("ddD::", trpc.pokemons.getPokemons.queryOptions());
  return useQuery<Pokemon[]>(trpc.pokemons.getPokemons.queryOptions());
  // return useQuery({
  //   queryKey: ["pokemon"],
  //   queryFn: async (): Promise<Pokemon[]> => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:3000/api/v1/rest/pokemon"
  //       );
  //       return response.json();
  //     } catch (ex) {
  //       throw ex;
  //     }
  //   },
  // });
};

export default useGetPokemons;
