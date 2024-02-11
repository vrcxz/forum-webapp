import { redirect } from '@sveltejs/kit';
import { getUserByUsername } from '$lib/server/model/users.js';

export const actions = {
  default: async ({ request,locals,params }) => {
    const formData = await request.formData();
    const postTitle = formData.get('title');
    const postContent = formData.get('content');
    
    const userData = await getUserByUsername(locals.username)
    
    console.log(postTitle,postContent,locals,userData,params);
    
  }
}

export function load({ params,locals }){
  if(!locals.username){
    redirect(302,'/home');
  }
  
  return {
    channel: params.channel
  }
}