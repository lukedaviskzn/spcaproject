<script>
    /** @type {import('./$types').PageData} */
	export let data;

    let open = false;
    let loading = false;

    /** @type {string | undefined} */
    let wallet;
    /** @type {number | undefined} */
    let amount;

    /**
     * @param {SubmitEvent} e
     */
    async function submitForm(e) {
        e.preventDefault();
        const SPCA_WALLET = wallet;
        console.log(wallet, amount, typeof wallet, typeof amount);

        if (!wallet || !amount || amount < 0) {
            console.log("failed");
            return;
        }

        // http://ilp.interledger-test.dev/cadesayner
        loading = true;
        let response;
        try {
            response = await (await fetch(`https://openpayment-test.onrender.com/payment?from=${encodeURIComponent(wallet)}&to=${encodeURIComponent(SPCA_WALLET)}&amount=${encodeURIComponent(amount)}`)).json();
        } catch {}
        loading = false;

        if (response) {
            window.location.href = response;
        }
    }
</script>

