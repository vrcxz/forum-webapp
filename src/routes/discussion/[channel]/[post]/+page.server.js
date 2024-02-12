import { redirect } from '@sveltejs/kit';
import { getPost,getPostComments } from '$lib/server/model/posts.js';

export async function load({ locals,params }){
  if(!locals.username){
    redirect(302,'/home');
  }

  const postData = await getPost(params.post);
  const commentDatas = await getPostComments(postData.postId);
  console.log(commentDatas);

  console.log(postData)
  
  return {
    postData,
    commentDatas
  };
}