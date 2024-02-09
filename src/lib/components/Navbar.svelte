<script>
  export let title = ''
</script>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-brand">{title}</div>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/home" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="/register" class="nav-link">Register</a>
        </li>
        <li class="nav-item">
          <a href="/login" class="nav-link">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>