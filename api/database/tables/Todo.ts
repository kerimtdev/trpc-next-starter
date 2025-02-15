import { boolean, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { nanoid } from "nanoid";

export const todoDBTable = mysqlTable("Todo", {
	id: varchar({ length: 24 }).primaryKey().$defaultFn(nanoid),
	title: varchar({ length: 50 }).notNull(),
	description: varchar({ length: 50 }),
	completed: boolean().default(false),
});
