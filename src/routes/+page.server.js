import { turso } from "$lib/turso.server";

export async function load() {
    const { rows } = await turso.execute("SELECT * FROM dogs");
    return {
        dogs: rows
    };
}
