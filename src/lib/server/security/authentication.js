import { getUserByUsername,
         getUserBySessionId,
         createSessionId,
         destroySessionIdbyUserId } from '$lib/server/model/users.js'

//shouldn't be exported/exposed
//much more secure to be accessed only within authenticate() function
function createSession(cookies,userId){
  const sessionId = crypto.randomUUID();
  cookies.set('sessionid',
              JSON.stringify({sessionId}),
              {
                path:'/',
                httpOnly: true
              }
  );
  createSessionId(sessionId,userId);
}

export async function destroySession(cookies,locals){
  const sessionId = cookies.get('sessionid');
  const userData = await getUserBySessionId(sessionId);
  
  if(userData){
    console.log('destroying sessionid')
    destroySessionIdbyUserId(userData['userId']);
  }
  
  cookies.delete('sessionid',{
    path:'/',
    httpOnly: true
  });
  locals.username = null;
}

export async function authenticate(cookies,request,locals){
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
  createSession(cookies,userData['userId']);
  locals.username = username;
  
  return {
      status: 'login successful'
    };
}

export async function isLoggedIn(cookies,locals){
  const sessionId = cookies.get('sessionid');
  console.log('sessionid:',sessionId);
  if(!sessionId){
    console.log('not logged in');
    return false;
  }
  
  //ugly locals side-effect
  const userData = await getUserBySessionId(sessionId);
  locals.username = userData['username'];
  
  if(!userData){
    console.log('invalid sessionId! Must ban!');
  }
  
  console.log('logged in');
  return true;
}