import { turso } from "$lib/turso.server";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { rows } = await turso.execute({
        sql: "SELECT * FROM dogs WHERE id = ? LIMIT 1",
        args: [params.id],
    });
    return {
        dog: rows.at(0)
    };
}
