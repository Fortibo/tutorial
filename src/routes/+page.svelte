<script lang="ts">
	import { kali } from "$lib/utils";

    let nama = "Eric"
    let angka = $state(0)
    let angka2 = $state(0)
    let perkalian = $derived(kali(angka,angka2))
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
Halo bang
<div>
    hallo {nama}
</div>
<div>
    umur : {perkalian}
</div>
<div>
    <label for="multi">Tes</label>
    <input type="number" bind:value={angka} id="multi">
</div>
<div>
    <label for="multi2">Tes2</label>
    <input type="number" bind:value={angka2} id="multi2">
</div>
<style>
div{
}

</style>