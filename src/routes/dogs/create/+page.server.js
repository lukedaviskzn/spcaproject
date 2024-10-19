import { turso } from "$lib/turso.server";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        let id = data.get('id')?.toString();
        if (id) {
            const { rows } = await turso.execute({
                sql: `SELECT * FROM dogs WHERE id = ?`,
                args: [id],
            });
            return { rows };
        }
    },
};
