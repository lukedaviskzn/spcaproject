<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

Dogs:
<ul style="width: 50%">
    {#each data.dogs as dog}
        <li>
            id: {dog.id}
            <br>
            name: {dog.name}
            <br>
            image: {dog.image}
            <br>
            breed: {dog.breed}
            <br>
            bio: {dog.bio}
            <br>
            birth_date: {new Date(dog.birth_date)} (Age: {((new Date() - new Date(dog.birth_date)) / (1000 * 3600 * 24 * 365)).toFixed(0)} years)
            <br>
            death_date: {dog.death_date}
        </li>
    {/each}
</ul>
