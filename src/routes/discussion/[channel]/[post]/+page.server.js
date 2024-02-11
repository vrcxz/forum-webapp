import { redirect } from '@sveltejs/kit';
import { getPost } from '$lib/server/model/posts.js';

export async function load({ locals,params }){
  if(!locals.username){
    redirect(302,'/home');
  }

const postData = await getPost(params.post);

  const { postTitle,
          postContent,
          authorName } = postData
  
  console.log(postData)
  
  return {
    postTitle,
    postContent,
    authorName
  };
}