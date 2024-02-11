<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />
<div class="container">
<h1>{data.channel}</h1>
<div class="input-group">
  <input type="text" class="form-control">
  <button class="btn btn-outline-secondary">Search</button>
</div>

<a href="/discussion/{data.channel}/create" class="btn btn-primary mt-3">Create Post</a>

<div class="card mt-3">
  <div class="card-body">
    <h2>Post</h2>
  </div>
  <div class="card-footer d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item"><a href="DIT/1" class="page-link">1</a></li>
      <li class="page-item"><a href="DIT/2" class="page-link">2</a></li>
      <li class="page-item"><a href="DIT/3" class="page-link">3</a></li>
    </ul>
  </div>
</div>
</div>