<script>
    import { slide } from "svelte/transition";

    export let dog;
</script>

<div class="bg-slate-600 rounded-xl overflow-hidden w-1/4" transition:slide={{axis: "x"}}>
    <a class="block bg-cover bg-center w-full aspect-square" style="background-image: url('/dogs/{dog.image}')" href="/dogs/{dog.id}"></a>
    <div class="flex p-4">
        <div class="flex-1">
            <h3 class="text-2xl mb-2">{dog.name}</h3>
            <p class="text-slate-400">{dog.breed}</p>
        </div>
        <div class="flex-1 text-right text-slate-400">
            {#if typeof dog.birth_date === "string"}
                {(((new Date()).getTime() - (new Date(dog.birth_date)).getTime()) / 1000 / 3600 / 24 / 365.25).toFixed(0)}
            {:else}
                ????
            {/if}
            years old
        </div>
    </div>
</div>
