<script lang="ts">
	import { logo } from '$env/static/public/'
</script>

<header class="header">
	<div class="header-wrapper">
		<div class="logo-title-wrapper">
			<img src="./static/W_N_SVG_ClypperLogo.svg">
		</div>
	</div>
</header>

<style>
	.header {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			color: white;
			background-color: #242424;
			padding: 10px 20px;
			gap: 20px;
			width: 100%;
			box-shadow: rgba(235, 235, 235, 0.4) 0 0 0;
	}

	.header-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 1024px;
		width: 100%;
		padding: 0 20px;
	}


</style>