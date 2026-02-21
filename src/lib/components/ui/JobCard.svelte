<script lang="ts">
	import type { JobDTO } from "$lib/services/jobs.remote";
	import Button from "./button/button.svelte";

    interface Props {
      job: JobDTO;
    }

    let { job }: Props = $props();

    let displayTitle = $derived(job.title.split(" - ")[0]);
    let displayAddress = $derived(`${job.address?.street ?? "Ukendt"} - ${job.address?.zip?? "Ukendt"}, ${job.address?.city ?? "Ukendt"}`);
</script>

<div class="job-card">
    <div class="title-address-wrapper">
        <h3>{displayTitle}</h3>
        <p>{displayAddress}</p>
    </div>
    <p>{job.address?.city}</p>
    <Button href="jobs/{job.id}" class="primary">
        Se mere
    </Button>
</div>

<style>
    .job-card {
        display: grid;
        grid-template-columns: 3fr repeat(2, 1fr);
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 20px 30px;
        background-color: #373737;
        border: 1px solid #5e5e5e;
        border-radius: 8px;
        text-align: left;
        color: white;
    }

    .title-address-wrapper {
        display: flex;
        flex-direction: column;
    }

    .button-wrapper {
        display: flex;
        justify-content: flex-end;
    }

    .categories-wrapper {
        display: grid;
        grid-gap: 20px;
    }

    @media only screen and (max-width: 720px) {
		.job-card {
			padding: 10px 10px;
		}
	}
</style>
