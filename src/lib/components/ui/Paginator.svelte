<script lang="ts">
    let { totalPages, pageChanged } = $props();
    let page : number = $state(1);

    function changePage(newPage : number) {
        if (newPage == page) return;
        if (newPage < 1 || newPage > totalPages) return;

        page = newPage;

        pageChanged(newPage);
    }
</script>

<div class="pagination-wrapper flex row">
    <div class="button-group flex row">
        <button onclick={() => changePage(1)} disabled={page === 1}>First</button>
        <button onclick={() => changePage(page - 1)} disabled={page === 1}>Previous</button>
    </div>

    <p>{page}</p>

    <div class="button-group flex row">
        <button onclick={() => changePage(page + 1)} disabled={page === totalPages}>Next</button>
        <button onclick={() => changePage(totalPages)} disabled={page === totalPages}>Last</button>
    </div>
</div>

<style>
    .pagination-wrapper {
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
    }

    .pagination-wrapper button, .pagination-wrapper p{
        padding: 10px 20px;
        background-color: white;
        border-radius: 8px;
        color: #242424;
        transition: 0.3s;
    }

    .pagination-wrapper button:hover {
        background-color: rgb(120, 120, 120);
        color: rgba(255, 236, 236, 0.8);
        cursor: pointer;
    }

    .button-group {
        gap: 10px;
    }
</style>