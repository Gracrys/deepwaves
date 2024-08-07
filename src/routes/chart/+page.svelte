<script lang="ts">
    import type { IPost } from '$lib/entities/post';
    import { onMount } from 'svelte';
    import '../../sass/chart.sass'

    import dayjs from 'dayjs';
    import { myselfTracksStore } from '../../store/lastFm';

let now = dayjs()
    let currentData: string[] =[]
    let filteredCurrentData: string[] =[]

    onMount(() => {
        setTimeout(() => {
        currentData = ($myselfTracksStore.track).map((x:any) => x.image[2]['#text'])
        filteredCurrentData = Array.from(new Set(currentData))
    },
    1000)
    })

</script>


<main>
<h1>Gracrys - {now.format('YYYY-MM-DD')}</h1>
<section>
    {#each filteredCurrentData as img}
    {#if img}
    <figure>
        <img src={img} alt="">
    </figure>
        
    {/if}
   
    {/each}

</section>
</main>