import { redirect } from '@sveltejs/kit';

export function load({locals,params}){
  if(!locals.username){
    redirect(302,'/home');
  }

  return {
    postId: params.post
  }
}