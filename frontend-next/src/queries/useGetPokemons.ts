"use client";
import { useQuery } from "@tanstack/react-query";

const useGetPokemons = () =>
  useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/rest/pokemon"
        );
        return response.json();
      } catch (ex) {
        throw ex;
      }
    },
  });

export default useGetPokemons;
