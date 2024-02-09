import { getUserByUsername } from '$lib/server/model/users.js'

export async function authenticate(cookies,request){
  const formData = await request.formData();
  console.log('form:',formData)
  
  const username = formData.get('username');
  const password = formData.get('password');
  
  let userData = await getUserByUsername(username);
  
  if(!userData){
    console.log('no user with that username exists')
    return {
      status: 'user does not exists'
    };
  }
  
  if(password != userData['password']){
    return {
      status: 'invalid credentials'
    };
  }
  
  //success
  const sessionId = crypto.randomUUID();
  cookies.set('session',
              JSON.stringify({sessionId}),
              {
                path:'/',
                httpOnly: true
              }
  );
  return {
      status: 'login successful'
    };
}

export function isLoggedIn(cookies){
  const session = cookies.get('session');
  console.log('session:',session);
  if(!session){
    console.log('not logged in');
    return false;
  }
  
  console.log('logged in');
  return true;
}