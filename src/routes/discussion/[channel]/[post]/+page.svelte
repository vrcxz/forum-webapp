<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />
<div class="container">
  <div class="card">
    <div class="card-body">
      <h2>Post Title {data.postId}</h2>
    </div>
  </div>
  
  <div class="card">
    <div class="card-body">
      <p>Post Comments {data.postId}</p>
    </div>
  </div>
</div>