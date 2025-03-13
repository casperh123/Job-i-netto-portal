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

<div class="pagination-wrapper">
    <button onclick={() => changePage(1)} disabled={page === 1}>First</button>
    <button onclick={() => changePage(page - 1)} disabled={page === 1}>Previous</button>
    <p>Page: {page}</p>
    <button onclick={() => changePage(page + 1)} disabled={page === totalPages}>Next</button>
    <button onclick={() => changePage(totalPages)} disabled={page === totalPages}>Last</button>
</div>