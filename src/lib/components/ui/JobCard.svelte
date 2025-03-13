<script lang="ts">
    let { job } = $props();
</script>

<div class="job-card">
    <div class="title-address-wrapper">
        <h3>{job.title}</h3>
        <p>{`${job.address.street} - ${job.address.zip}, ${job.address.city}`}</p>
    </div>
    <p>{job.address.city}</p>
    <div class="button-wrapper">
        <button class="btn primary">Se Mere</button>
    </div>
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
</style>