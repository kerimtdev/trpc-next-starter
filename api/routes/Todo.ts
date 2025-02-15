import { eq } from "drizzle-orm/sql";
import { db } from "~/api/database/client";
import { todoDBTable } from "~/api/database/tables/Todo";
import { procedure, router } from "~/api/trpc";
import { Todo } from "~/api/validators/Todo";

export const todoTRPCRouter = router({
	all: procedure.query(async () => {
		const data = await db.query.todoDBTable.findMany();
		return data;
	}),

	create: procedure.input(Todo.insertSchema).mutation(async ({ input }) => {
		const payload: Todo.InsertSchema = {
			title: input.title,
			description: input.description || null,
			completed: false,
		};

		const returningId = await db
			.insert(todoDBTable)
			.values(payload)
			.$returningId();

		const data = await db.query.todoDBTable.findFirst({
			where: eq(todoDBTable.id, returningId.at(0)?.id || ""),
		});

		return data;
	}),
});
