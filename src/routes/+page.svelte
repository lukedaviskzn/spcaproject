<script>
    import DogCard from "$lib/DogCard.svelte";
    import NavBar from "$lib/NavBar.svelte";
    import { onDestroy, onMount } from "svelte";

    export let data;

    let subset_start = 0;
    /**
     * @type {any[]}
     */
    let subset = [];

    /**
     * @type {NodeJS.Timeout | undefined}
     */
    let interval;

    function createInterval() {
        interval = setInterval(() => {
            subset_start += 1;
            createSubset();
        }, 2500);
    }

    function createSubset() {
        let s = [];

        for (let i = subset_start; i < subset_start + 4; i++) {
            let j = i % data.dogs.length;
            if (j < 0) {
                j += data.dogs.length;
            }
            s.push({
                id: i,
                dog: data.dogs[j],
            });
        }

        subset = s;
    }

    onMount(() => {
        createSubset();
        createInterval();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<NavBar/>

{subset_start}
<div class="flex w-full">
    <button class="text-5xl p-2" on:click={() => {subset_start--; createSubset()}}>&langle;</button>
    <div class="flex gap-2 flex-1">
        {#each subset as dog (dog.id)}
            <DogCard dog={dog.dog}/>
        {/each}
    </div>
    <button class="text-5xl p-2" on:click={() => {subset_start++; createSubset()}}>&rangle;</button>
</div>