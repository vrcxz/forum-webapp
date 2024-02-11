<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar signedIn=true />
<div class="container">
<h1>Courses</h1>
<div class="input-group">
  <input type="text" class="form-control">
  <i class="bi bi-search input-group-text" width="40" height="40"></i>
</div>

<div class="list-group mt-3">
  <a href="/discussion/DIT" class="list-group-item list-group-item-action"><strong>DIT</strong></a>
</div>

</div>