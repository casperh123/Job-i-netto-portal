<script lang="ts">
	import { onMount } from 'svelte';
	import { apiClient } from '$lib/services/api';
	import JobCard from '$lib/components/ui/JobCard.svelte';
	import Paginator from '$lib/components/ui/Paginator.svelte';

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

<div class="job-cards-wrapper">
{#if jobs.length > 0}
		{#each jobs as job}
			<JobCard job={job}></JobCard>
		{/each}

		<Paginator totalPages={pages} pageChanged={getPage}/>
{:else}
	<p>Loading jobs...</p>
{/if}
</div>

<style>
	.header-wrapper {
		width: 100%;
		text-align: center;
		padding: 80px 20px;
		background-color: #F8DF81;
	}

	.job-cards-wrapper {
			display: flex;
		flex-direction: column;
		width: 100%;
		gap: 20px;
		margin: 40px 0;
		padding: 40px;
		border-radius: 8px;
		background-color: #242424;
		max-width: 1024px;
	}
</style>