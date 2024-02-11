<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar signedIn=true />
<div class="container">
<h1>Discussion</h1>
<div class="input-group">
  <input type="text" class="form-control">
  <i class="bi bi-search input-group-text" width="40" height="40"></i>
</div>

<div class="card">
  <div class="card-body">
    <h2>Post</h2>
  </div>
  <div class="card-footer d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item"><a href="discussion/1" class="page-link">1</a></li>
      <li class="page-item"><a href="discussion/2" class="page-link">2</a></li>
      <li class="page-item"><a href="discussion/3" class="page-link">3</a></li>
    </ul>
  </div>
</div>
</div>