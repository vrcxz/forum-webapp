<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />

<div class="card container">
  <div class="card-header my-3">
    <div class="text-muted">
      Course: {data.channel}
    </div>
  </div>
  <form method="post">
    <div class="input-group mb-3">
      <div class="input-group-text">Title</div>
      <input type="text" name="title" class="form-control">
    </div>
    <textarea name="content" class="form-control mb-3" rows="15"></textarea>
    <button class="btn btn-primary mb-3">Create</button>
  </form>
</div>