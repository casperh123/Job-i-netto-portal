<script lang="ts">
	import { onMount } from 'svelte';
	import { apiClient } from '$lib/services/api';
	import JobCard from '$lib/components/ui/JobCard.svelte';

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

<div class="header-wrapper">
	<h1>Job i Netto</h1>
	<h2>Din Jobportal til Netto</h2>
</div>

{#if jobs.length > 0}
	<div class="job-cards-wrapper">
		{#each jobs as job}
			<JobCard job={job}></JobCard>
		{/each}
	</div>
	<p>Page: {page}</p>
	<button on:click={() => getPage(1)} disabled={page === 1}>First</button>
	<button on:click={() => getPage(page - 1)} disabled={page === 1}>Previous</button>
	<button on:click={() => getPage(page + 1)} disabled={page === pages}>Next</button>
	<button on:click={() => getPage(pages)} disabled={page === pages}>Last</button>

{:else}
	<p>Loading jobs...</p>
{/if}

<style>
	.header-wrapper {
		padding: 20px;
	}

	.job-cards-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 40px;
		border-radius: 8px;
		background-color: #242424;
	}
</style>