import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { trpcRouter } from "~/api/router";

const handler = (request: Request) => {
	console.log(`incoming request ${request.url}`);
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req: request,
		router: trpcRouter,
	});
};

export { handler as GET, handler as POST };
