import { defineConfig } from "drizzle-kit";
import { mysqlConnection } from "~/api/database/connection";

require("dotenv").config();

export default defineConfig({
	dialect: "mysql",
	schema: "./api/database/tables",
	out: "./api/database/migrations",
	dbCredentials: { url: mysqlConnection },
});
