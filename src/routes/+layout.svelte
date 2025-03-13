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
			background-color: #FAD85B;
	}

	.main-content {
			max-width: 1024px;
			width: 100%;
			padding: 80px 20px;
	}
</style>