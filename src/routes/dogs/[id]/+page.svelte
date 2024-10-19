<script>
    /** @type {import('./$types').PageData} */
	export let data;
</script>

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
            <button class="bg-slate-600 rounded-sm px-2 py-1 border">Give { data.dog.name } Money</button>
        </div>
    {/if}
</div>