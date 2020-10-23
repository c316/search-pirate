<script>
  let searchValue = '';
	function search() {
    console.log('searching');
    console.log(searchValue)
  }
  import Login from './Login.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
</svelte:head>

<main>
	<h1>Search Pirate!</h1>
	<label for="search">Search</label>
	<input id="search" bind:value={searchValue} />
	<button on:click={search}>Search</button>
	<Login />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif, cursive;
	}

	h1 {
		color: #760a0a;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>