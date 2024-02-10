import { isLoggedIn,destroySession } from '$lib/server/security/authentication.js';

export async function handle({event,resolve}){
  let {cookies,request,locals} = event;
  console.log(locals)
  await isLoggedIn(cookies,locals);
  
  const response = await resolve(event);
 
  return response;
}