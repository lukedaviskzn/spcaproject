<script>
    import { slide } from "svelte/transition";

    export let dog;
</script>

<div class="bg-slate-600 p-2 w-1/4" transition:slide={{axis: "x"}}>
    {dog.name}
    <div class="bg-cover bg-center w-full aspect-portrait" style="background-image: url('/dogs/{dog.image}')"></div>
    {dog.breed}
    {#if typeof dog.birth_date === "string"}
        - {(((new Date()).getTime() - (new Date(dog.birth_date)).getTime()) / 1000 / 3600 / 24 / 365.25).toFixed(0)}
    {:else}
        - ????
    {/if}
    years old
</div>
