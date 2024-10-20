/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        resp: await fetch(`http://127.0.0.1:3000/completePayment?nonce=${params.nonce}&interact_ref=${params.interact_ref}`),
    };
}
