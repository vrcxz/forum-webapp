<script>
  import Navbar from '$lib/components/Navbar.svelte';
  export let data;
</script>

<Navbar signedIn=true />
<div class="container my-3">
  <div class="card mb-3">
    <div class="card-header">
      <h3>{data.postData.postTitle}</h3>
      <div>by <span class="badge bg-secondary">{data.postData.authorName}</span></div>
    </div>
    <div class="card-body mb">
      <div>{data.postData.postContent}</div>
    </div>
  </div>
  
  <hr>
  
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      Comments
      <button class="btn btn-primary btn-sm">+</button>
    </div>
    <div class="card-body">
      {#each data.commentDatas as comment}
      <div class="card mb-3">
        <div class="card-header">
          <div>by <span class="badge bg-secondary">{comment.authorName}</span></div>
        </div>
        <div class="card-body">
          {comment.commentContent}
        </div>
        <!--
        <div class="card-footer d-flex justify-content-end">
          <button class="btn btn-primary btn-sm">Reply</button>
        </div>
        -->
      </div>
      {/each}
    </div>
  </div>
</div>