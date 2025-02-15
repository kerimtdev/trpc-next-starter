"use client";
import { trpcReact } from "~/api/client";

export default function Home() {
	const todosQuery = trpcReact.todo.all.useQuery();
	return <pre>{JSON.stringify(todosQuery, null, 2)}</pre>;
}
