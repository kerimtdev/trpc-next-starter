import { todoTRPCRouter } from "~/api/routes/Todo";
import { router } from "~/api/trpc";

export const trpcRouter = router({
	todo: todoTRPCRouter,
});

export type TRPCRouter = typeof trpcRouter;
