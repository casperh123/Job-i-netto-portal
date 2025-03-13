<script lang="ts">

</script>

<header class="header">
	<div class="header-wrapper">
		<h2>Job I Netto</h2>
		<nav class="nav-wrapper">
			<a href="/" class="nav-element">Home</a>
			<a href="/some-page" class="nav-element">Some Page</a>
		</nav>
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

	.nav-wrapper {
		display: flex;
		justify-content: center;
	}

	.nav-element {
			color: white;
			border-radius: 3px;
			padding: 10px 20px;
			transition-duration: 0.3s;
	}

	.nav-element:hover {
			color: white;
			background-color: #FAD85B;
			border-radius: 8px;
	}
</style>