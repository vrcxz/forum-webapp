<script>
  export let signedIn = false;
  const signedInItems = [
      { name:'Discussion', link:'/discussion' },
      { name:'Dashboard', link:'/dashboard' },
      { name:'Logout', link:'/logout' }
    ];

  export let title = '';
  export let navItems = [
      { name:'Home', link:'/home' },
      { name:'Login', link:'/login' },
      { name:'Register', link:'/register' }
    ];
    
  if(signedIn){
    navItems = signedInItems;
  }
    
</script>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-brand">{title}</div>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        {#each navItems as item}
        <li class="nav-item">
          <a href={item.link} class="nav-link">{item.name}</a>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>