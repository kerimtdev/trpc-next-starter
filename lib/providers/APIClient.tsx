"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpcClient, trpcReact } from "~/api/client";

const TRPCProvider = trpcReact.Provider;

export const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 5000 } },
});

export function APIClientProvider({ children }: React.PropsWithChildren) {
	return (
		<TRPCProvider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</TRPCProvider>
	);
}
