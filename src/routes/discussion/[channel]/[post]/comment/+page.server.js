import { createComment } from '$lib/server/model/posts.js';
import { getUserById } from '$lib/server/model/users.js';
import { redirect } from '@sveltejs/kit';

export async function load({ request }){
  return null;
}

export const actions = {
  default: async ({ request,params,locals }) => {
    const formData = await request.formData();
    
    const commentContent = formData.get('content');
    await createComment(commentContent,
                        locals.userId,
                        locals.username,
                        params.post,
                        0);
    redirect(302,'/discussion/'+params.channel+'/'+params.post);
  }
}