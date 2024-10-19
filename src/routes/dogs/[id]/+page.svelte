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

<a class="inline-block m-2 bg-slate-600 rounded-sm px-2 py-1 border" href="/">Back</a>
<div class="flex gap-2">
    {#if data.dog}
        <div class="bg-cover bg-center aspect-portrait w-48" style="background-image: url('/dogs/{data.dog.image}')"></div>
        <div>
            Name: { data.dog.name }<br>
            Breed: { data.dog.breed }<br>
            Bio: { data.dog.bio }<br>
            Birth Date: { data.dog.birth_date }<br>
            Death Date: { data.dog.death_date }<br>
            <br>
            <button class="bg-slate-600 rounded-sm px-2 py-1 border" on:click={() => open = !open}>Give { data.dog.name } Money</button>
        </div>
    {/if}
</div>

{#if open}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex items-center justify-center" on:click={() => open = false}>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="bg-slate-800 p-2 rounded" on:click={e => e.stopPropagation()}>
            <form on:submit={submitForm}>
                <label for="wallet">Wallet</label>
                <input class="text-black" type="text" name="wallet" id="wallet" bind:value={wallet} disabled={loading}><br>
                <label for="amount">Amount</label>
                <input type="range" name="amount" id="amount" bind:value={amount} disabled={loading}><br>
                <input class="bg-slate-600 rounded-sm px-2 py-1 border" type="submit" value="Give Money" disabled={loading}>
            </form>
        </div>
    </div>
{/if}
