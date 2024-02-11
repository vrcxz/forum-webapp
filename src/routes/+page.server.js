import { redirect } from '@sveltejs/kit';

export function load({locals}){
  if(locals){
    redirect(302,'/dashboard');
  }
  else{
    redirect(302,'/home');
  }
}