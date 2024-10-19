import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "$env/static/private";
import { turso } from "$lib/turso.server";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
    
        let data = await request.formData();
        let name = data.get('name')?.toString();
        let image = data.get('image')?.toString();
        let breed = data.get('breed')?.toString();
        let bio = data.get('bio')?.toString();
        let date_of_birth = data.get('date_birth')?.toString();
        let date_of_death = data.get('date_death')?.toString();

        if (data && name && image && breed && bio) {
            await turso.execute({
                sql: 'INSERT INTO dogs (name, image, breed, bio, birth_date, death_date) VALUES (?, ?, ?, ?, ?, ?);',
                args: [name, image, breed, bio, date_of_birth || null, date_of_death || null],
            })
        }
    },
};
