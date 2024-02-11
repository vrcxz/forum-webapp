import { createUser,
         getUserByUsername,
         getSessionIdByUserId,
         getUserBySessionId,
         createSessionId,
         destroySessionIdbyUserId } from '$lib/server/model/users.js'

//shouldn't be exported/exposed
//much more secure to be accessed only within authenticate() function
function createSession(cookies,userId){
  const sessionId = crypto.randomUUID();
  cookies.set('sessionid',
               sessionId,
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
  console.log('step1')
  const response = await authenticate(cookies,formData);
  console.log('step2')
  if(response.status == 200 && !locals.username){
    //check if session already exists in db
    const sessionId = await getSessionIdByUserId(response.data.userId);
    //should be able to renew old session id
    console.log('step3',sessionId,response.data.userId)
    if(!sessionId) return {
      error: 'user has no existing session'
    }
    
    if(sessionId){
      console.log('step3.5')
      await destroySessionIdbyUserId(response.data.userId);
    }
    createSession(cookies,response.data['userId']);
  }
  console.log('step4')
  
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
  }
}


export async function isLoggedIn(cookies,locals){
  const sessionId = cookies.get('sessionid');
  if(!sessionId){
    return false;
  }
  
  const userData = await getUserBySessionId(sessionId);
  
  if(!userData){
    //invalid session! must have been tampered
    //ban them!
    destroySession(cookies,locals);
    locals = null;
    return false;
  }
  
  //ugly session side-effect, refactor if possible
  locals.username = userData['username'];
  console.log('logged in',locals);
  return true;
}