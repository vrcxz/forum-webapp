import { redirect } from '@sveltejs/kit';

export function load({locals}){
  if(!locals.username){
    redirect(302,'/home');
  }
}