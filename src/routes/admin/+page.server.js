import { redirect } from '@sveltejs/kit';

export function load({locals}){
  if(locals.role != 'admin'){
    redirect(302,'/dashboard');
  }
}