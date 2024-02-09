import { destroySession } from '$lib/server/security/authentication.js';
import { redirect } from '@sveltejs/kit';

export async function load({cookies,locals}){
  console.log('logging out');
  await destroySession(cookies,locals);
  redirect(302,'/home');
}