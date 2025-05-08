"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/get-query-client";
import { ReactNode, useState } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../../backend-nest/dist/trpc/@generated/server";
import { TRPCProvider } from "@/utils/trpc";

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <ErrorBoundary
          errorComponent={({ error }) => {
            console.log("xxX::", error);
            return <div>{error.message}</div>;
          }}
        >
          {children}
        </ErrorBoundary>
      </TRPCProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
