<script>
  export let title = ''
  export let link = ''
</script>

<div class="card mt-5">
  <div class="card-header">
    <h3>{title}</h3>
  </div>
  <div class="card-body">
    <form action="{link}" method="post">
      <div class="mb-3">
        <label for="username">Username</label>
        <input type="text" name="username" class="form-control">
      </div>
      <div class="mb-3">
        <label for="password">Password</label>
        <input type="text" name="password" class="form-control">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>