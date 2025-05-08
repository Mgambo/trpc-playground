import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "../../../backend-nest/dist/trpc/@generated/server";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();
