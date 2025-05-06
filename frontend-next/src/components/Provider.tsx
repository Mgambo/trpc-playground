"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/get-query-client";
import { ReactNode } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        errorComponent={({ error }) => {
          console.log("xxX::", error);
          return <div>{error.message}</div>;
        }}
      >
        {children}
      </ErrorBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
