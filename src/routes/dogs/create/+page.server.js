import { turso } from "$lib/turso.server";
import { AccountFlags, createClient, id } from "tigerbeetle-node";

const client = createClient({
    cluster_id: 0n,
    replica_addresses: [process.env.TB_ADDRESS || '3000'],
});

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        let data = await request.formData();
        let name = data.get('name')?.toString();
        let type = data.get('type')?.toString();
        let image = data.get('image')?.toString();
        let bio = "";
        let breed = data.get('breed')?.toString();
        let date_of_birth = data.get('date_birth')?.toString() || null;
        let date_of_death = data.get('date_death')?.toString() || null;
        let hobby = data.get('hobby')?.toString() ?? "";

        if (!name || !image || !bio || !breed) return;

        let acc_id = id();

        await client.createAccounts([{
            id: acc_id,
            ledger: 700,
            code: 200,
            flags: AccountFlags.credits_must_not_exceed_debits,
            debits_pending: 0n,
            debits_posted: 0n,
            credits_pending: 0n,
            credits_posted: 0n,
            user_data_128: 0n,
            user_data_64: 0n,
            user_data_32: 0,
            reserved: 0,
            timestamp: 0n
        }]);

        await fetch(`http://localhost:3000/generateBio?name=${name}&breed=${breed}&type=${type}&hobby=${hobby}`).then(response => {
            return response.text();
        }).then(dogdata => {bio = dogdata.toString()});

        if (data) {
            await turso.execute({
                sql: 'INSERT INTO dogs (name, image, breed, bio, birth_date, death_date, account) VALUES (?, ?, ?, ?, ?, ?, ?);' ,
                args: [name, image, breed, bio, date_of_birth, date_of_death, acc_id],
            })
        }
    },
};
