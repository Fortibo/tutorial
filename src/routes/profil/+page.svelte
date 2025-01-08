<script lang="ts">
    const {data} = $props()
    console.log(data)
</script>
{#each data.nama as nama}
{#if nama.umur <= 20}
<div>
    <p>{nama.nama}</p>
    <p>{nama.umur}</p>
    
</div>
{/if}
    
{/each}

tes