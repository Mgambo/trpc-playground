"use client";
import useGetPokemons from "@/queries/useGetPokemons";
import { Suspense } from "react";

export default function TRpc() {
  const { data } = useGetPokemons();
  console.log("reset::", JSON.stringify(data));
  return (
    <Suspense fallback={<div>loading ... </div>}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          TRPC
        </main>
      </div>
    </Suspense>
  );
}
