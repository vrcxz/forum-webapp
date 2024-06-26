import { redirect } from '@sveltejs/kit';

export async function load({cookies,locals}){
  if(!locals.username){
    redirect(302,'/home');
  }
 
  return {
    username: locals.username ?? ''
  }
}