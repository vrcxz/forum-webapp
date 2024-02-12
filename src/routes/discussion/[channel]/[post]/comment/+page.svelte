<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />

<div class="card container">
  <div class="card-header my-3">
    <div class="text-muted">
      Replying to: undefined author
    </div>
  </div>
  <form method="post">
    <textarea name="content" class="form-control mb-3" rows="15"></textarea>
    <button class="btn btn-primary mb-3">Comment</button>
  </form>
</div>