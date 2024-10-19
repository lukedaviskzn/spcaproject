<script>
    /** @type {import('./$types').PageData} */
	export let data;

    let open = false;
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
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex items-center justify-center" on:click={() => open = false}>
        <div class="bg-slate-800 p-2 rounded" on:click={e => e.stopPropagation()}>
            <form action="/">
                <label for="wallet">Wallet</label>
                <input class="text-black" type="text" name="wallet" id="wallet"><br>
                <label for="amount">Amount</label>
                <input type="range" name="amount" id="amount"><br>
                <input class="bg-slate-600 rounded-sm px-2 py-1 border" type="submit" value="Give Money">
            </form>
        </div>
    </div>
{/if}
