<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { getJob } from "$lib/services/jobs.remote";
	import type { PageProps } from "../../$types";
	import BreadcrumbList from "$lib/components/ui/breadcrumb/breadcrumb-list.svelte";
	import BreadcrumbItem from "$lib/components/ui/breadcrumb/breadcrumb-item.svelte";
	import BreadcrumbSeparator from "$lib/components/ui/breadcrumb/breadcrumb-separator.svelte";
	import Button from "$lib/components/ui/button/button.svelte";

  let { params }: PageProps = $props();

let slug = params.id;
  const job: Job = await getJob(slug);

  console.log(job);
</script>
  
<div class="main-wrapper">
  <div class="hero-wrapper">
    <div class="hero">
      <BreadcrumbList>
        <BreadcrumbItem>
          <a href="/">Jobs</a>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
          Job
        </BreadcrumbItem>
      </BreadcrumbList>

      <h2>{job.title}</h2>
      <div class="seperator">
        <Separator/>
      </div>
      <div class="metadata-wrapper">
        <div class="metadata">
          <div>
            <h3>Start dato</h3>
            <p>{job.start}</p>
          </div>
          <div>
            <h3>Job ID</h3>
            <p>{job.datasourceId}</p>
          </div>
        </div>
        <Button href={job.url} target="_blank">Ansøg</Button>
      </div>


    </div>
  </div>
  <div class="description prose">
    {@html job.description}
  </div>
</div>

<style>
  .metadata-wrapper {
    display: flex;
    align-items: center;
    max-width: 600px;
    gap: 40px;
    margin: 20px 0 0 0;
  }

  .metadata {
    display: flex;
    gap: 40px;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-wrapper {
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: var(--yellow);
  }

  .hero {
    width: var(--content-width);
    padding: 40px 20px;
    gap: 20px;
  }

  .description {
    width: var(--content-width);
    padding: 40px 20px;
  }

  .seperator {
    background-color: black!important;
    width: 33%;
  }

  .back-button {
    margin-bottom: 20px;
  }
</style>
