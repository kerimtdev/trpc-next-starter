import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-valibot";
import { type InferOutput, optional, pipe } from "valibot";
import { todoDBTable } from "~/api/database/tables/Todo";

export namespace Todo {
	export type Schema = InferOutput<typeof baseSchema>;
	export type InsertSchema = InferOutput<typeof insertSchema>;

	export const baseSchema = createSelectSchema(todoDBTable);
	export const selectSchema = createSelectSchema(todoDBTable);
	export const updateSchema = createUpdateSchema(todoDBTable);
	export const insertSchema = createInsertSchema(todoDBTable, {
		id: (schema) => pipe(optional(schema)),
	});
}
