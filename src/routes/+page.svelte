<script lang="ts">
	import { onMount } from 'svelte';
	import { apiClient } from '$lib/services/api';
	import JobCard from '$lib/components/ui/JobCard.svelte';
	import Paginator from '$lib/components/ui/Paginator.svelte';

	let { data } = $props();

	let jobs : Array<any> = $state(data.jobs ?? []);
	let page = $state(data.page);
	let items = $state(data.items);
	let pages = $state(Math.ceil(items / 10));

	async function getPage(nextPage : number) {
		const response = await apiClient.Get("", `/api/jobs?page=${nextPage}`)
		jobs = response.items;
		items = response.pages;
		page = nextPage;
		pages = Math.ceil(items / 10);
	}
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.metaDescription}/>
</svelte:head>

<div class="header-wrapper">
	<h1>Job i Netto</h1>
	<h2>Din Jobportal til Netto</h2>
</div>

<div class="job-cards-wrapper">
	<h2>Jobs</h2>
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
		text-align: center;
		width: 100%;
		color: white;
		gap: 30px;
		margin: 40px 0;
		padding: 40px;
		border-radius: 8px;
		background-color: #242424;
		max-width: 1024px;
	}

	@media only screen and (max-width: 720px) {
		.header-wrapper {
			padding: 40px 5px
		}

		.job-cards-wrapper {
			padding: 20px 10px;
			margin: 0 0 40px 0;
			gap: 15px;
		}
	}
</style>
