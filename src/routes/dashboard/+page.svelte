<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />
<h1>Welcome to Dashboard, {data.username}!</h1>