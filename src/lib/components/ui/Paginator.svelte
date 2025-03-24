<script lang="ts">
    let { totalPages, pageChanged } = $props();
    
    let page : number = $state(1);

    function changePage(newPage: number) {
        if (newPage < 1) {
            newPage = 1;
        } else if (newPage > totalPages) {
            newPage = totalPages;
        }
        
        if (newPage !== page) {
            page = newPage;
            pageChanged(newPage);
        }
    }
    
    function handleInputChange(event: Event) {
        const input = event.target as HTMLInputElement;
        let newPage = parseInt(input.value);
        
        if (isNaN(newPage)) {
            input.value = page.toString();
            return;
        }
        
        changePage(newPage);
        
        input.value = page.toString();
    }
</script>

<div class="pagination-wrapper flex row">
    <div class="button-group flex row">
        <button onclick={() => changePage(1)} disabled={page === 1}>Første</button>
        <button onclick={() => changePage(page - 1)} disabled={page === 1}>Forrige</button>
    </div>

    <div class="flex gap-1 items-center">
        <input class="page-counter" type="number" value={page} onchange={handleInputChange} min="1" max={totalPages}/>
        <p class="counter">/ {totalPages}</p>
    </div>

    <div class="button-group flex row">
        <button onclick={() => changePage(page + 1)} disabled={page === totalPages}>Næste</button>
        <button onclick={() => changePage(totalPages)} disabled={page === totalPages}>Sidste</button>
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

    .counter {
        color: #fff;
    }

    .page-counter {
        background-color: white;
        color: #242424;
        border-radius: 8px;
        text-align: center;
        max-width: 60px;
        padding: 5px 0;
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
            padding: 2px 10px;
            font-size: 12px;
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