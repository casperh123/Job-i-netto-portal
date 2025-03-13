<script lang="ts">
	import { onMount } from 'svelte';
	import { apiClient } from '$lib/services/api';

	let jobs : Array<any> = [];
	let page = 1;
	let items = 0;
	let pages = 0;

	onMount(async () => {
		await getPage(page);
	})

	async function getPage(nextPage : number) {
		const response = await apiClient.Get("", `/api/jobs?page=${nextPage}`)
		jobs = response.items;
		items = response.pages;
		page = nextPage;
		pages = Math.ceil(items / 10);
	}
</script>

<h1>Job i Nette</h1>
<h2>Din Jobportal til Netto</h2>

{#if jobs.length > 0}
	<ul>
		{#each jobs as job}
			<li>{job.brand}</li>
			<li>{job.title}</li>
		{/each}
	</ul>
	<p>Page: {page}</p>
	<button on:click={() => getPage(1)} disabled={page === 1}>First</button>
	<button on:click={() => getPage(page - 1)} disabled={page === 1}>Previous</button>
	<button on:click={() => getPage(page + 1)} disabled={page === pages}>Next</button>
	<button on:click={() => getPage(pages)} disabled={page === pages}>Last</button>

{:else}
	<p>Loading jobs...</p>
{/if}