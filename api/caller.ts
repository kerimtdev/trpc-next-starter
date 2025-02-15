import { httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import { trpcRouter } from "~/api/router";

export const trpcCaller = trpcRouter.createCaller({
	links: [
		httpBatchLink({
			url: "/api/trpc",
			transformer: SuperJSON,
		}),
	],
});
