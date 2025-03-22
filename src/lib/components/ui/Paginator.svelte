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

    <p class="page-counter">{page}</p>

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
        color: #242424;
    }

    .pagination-wrapper button{
        padding: 10px 20px;
        background-color: #F8DF81;
        border-radius: 8px;
        transition: 0.3s;
    }

    .pagination-wrapper button:hover {
        background-color: rgb(120, 120, 120);
        color: rgba(255, 236, 236, 0.8);
        cursor: pointer;
    }

    .page-counter {
    background-color: white;
    color: #242424;
    border-radius: 8px;
    padding: 10px 20px; 
}

    .button-group {
        gap: 10px;
    }

    .button-group button:disabled {
        opacity: 0;
        pointer: none;
    }

    .button-group button:disabled:hover {
        cursor: default;
    }

    @media only screen and (max-width: 720px) {
        .page-counter {
            padding: 5px 10px;
        }

        .pagination-wrapper button {
            padding: 5px 10px;
        }

        .button-group {
            gap: 10px;
            font-size: 13px;
        }
    }
</style>