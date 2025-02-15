import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import SuperJSON from "superjson";
import type { TRPCRouter } from "~/api/router";

export const trpcReact = createTRPCReact<TRPCRouter>();

export const trpcClient = trpcReact.createClient({
	links: [
		httpBatchLink({
			url: "/api/trpc",
			transformer: SuperJSON,
		}),
	],
});
