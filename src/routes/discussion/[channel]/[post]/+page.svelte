<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />
<div class="container my-3">
  <div class="card mb-3">
    <div class="card-header">
      <h3>{data.postTitle}</h3>
      <div>by <span class="badge bg-primary">{data.authorName}</span></div>
    </div>
    <div class="card-body mb">
      <div>{data.postContent}</div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5>Comments</h5>
      <button class="btn btn-primary btn-sm">+</button>
    </div>
    <div class="card-body">
 
    </div>
  </div>
</div>