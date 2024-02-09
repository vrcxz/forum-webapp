import { isLoggedIn,destroySession } from '$lib/server/security/authentication.js';

export async function handle({event,resolve}){
  let {cookies,request} = event;
  isLoggedIn(cookies);
  
  const response = await resolve(event);
 
  return response;
}