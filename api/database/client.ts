import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { mysqlConnection } from "~/api/database/connection";
import * as schema from "~/api/database/schema";

export const mysqlClient = await mysql.createConnection(mysqlConnection);

export const db = drizzle({
	mode: "default",
	client: mysqlClient,
	schema,
});
