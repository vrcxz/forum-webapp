import { createUser,
         getUserByUsername,
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
  console.log('user id got:',userId)
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

//pass formData instead of request pls
export async function authenticate(cookies,formData){
  const username = formData.get('username');
  const password = formData.get('password');
  
  let userData = await getUserByUsername(username);
  
  if(!userData){
    console.log('no user with that username exists')
    return {
      error: 'user does not exist',
      status: 404
    };
  }
  
  if(password != userData['password']){
    return {
      error: 'invalid credentials',
      status: 401
    };
  }
  
  return {
    message: 'user identified',
    data: {
      userId: userData['userId']
    },
    status: 200
  }
}

export async function loginUser(cookies,formData,locals){
  const response = await authenticate(cookies,formData);
  if(response.status == 200){
    console.log('step')
    createSession(cookies,response.data['userId']);
  }
}

export async function registerUser(cookies,formData,locals){
  const response = await authenticate(cookies,formData);
  if(response.status == 404){
    const user = {
      username: formData.get('username'),
      password: formData.get('password')
    };
    
    if(!user.username || !user.password){
      return {
        error: 'undefined username or password',
        status: 404
      };
    }
    createUser(user);
    console.log('user created!')
  }
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
  
  console.log('logged in',locals);
  return true;
}