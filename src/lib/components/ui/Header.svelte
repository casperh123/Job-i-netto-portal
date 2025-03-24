<header class="header">
	<div class="header-wrapper">
		<div class="logo-title-wrapper">
			<img src="/W_N_SVG_ClypperLogo.svg" height=55 width=55 alt="Clypper Technology Logo">
			<div class="title-wrapper">
				<h3>Clypper's</h3>
				<h4>Job I Netto</h4>
			</div>
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

	.logo-title-wrapper {
		display: flex;
		gap: 5px;
	}

	.title-wrapper {
		display: flex;
    	flex-direction: column;
    	justify-content: space-between;
    	height: 100%;
	}

	@media only screen and (max-width: 720px) {
		.header {
			padding: 0px 5px;
			margin: unset;
		}

		.header-wrapper {
			padding: 20px 5px;
		}
	}
</style>