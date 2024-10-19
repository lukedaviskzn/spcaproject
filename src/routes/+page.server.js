import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "$env/static/private";
import { turso } from "$lib/turso.server";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log("env: ", TURSO_DATABASE_URL, TURSO_AUTH_TOKEN);
    const { rows } = await turso.execute("SELECT * FROM dogs");
    return {
        dogs: rows
    };
}
