import { redirect } from '@sveltejs/kit';
import { getUserByUsername } from '$lib/server/model/users.js';
import { createPost,getChannel } from '$lib/server/model/posts.js';

export const actions = {
  default: async ({ request,locals,params }) => {
    const formData = await request.formData();
    const postTitle = formData.get('title');
    const postContent = formData.get('content');
    
    console.log(postTitle)
    
    const userData = await getUserByUsername(locals.username)
    const channelData = await getChannel(params.channel);
    
    await createPost(channelData.channelId,
                     channelData.channelName,
                     postTitle,
                     postContent,
                     userData.userId,
                     userData.username);
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