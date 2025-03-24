<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Footer, Header } from '$lib/components/ui';
</script>

<Header />
<div class="main-content-wrapper">
	<div class="main-content">
		{@render children()}
	</div>
</div>
<Footer />

<style>
	.main-content-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: #F5F5F5;
		min-height: calc(100vh - 74px);
	}

	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>