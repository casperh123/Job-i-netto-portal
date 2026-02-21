<script lang="ts">
	import type { PageProps } from "../../$types";
    

  let { params }: PageProps = $props();

  let slug = params.jobId;
</script>
  
<div><h1>{slug}</h1></div>

<style>

</style>
