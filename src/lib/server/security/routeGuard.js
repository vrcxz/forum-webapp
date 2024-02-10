import redirect from '@sveltejs/kit';

export function guard(request,locals){
  const routes = [
      { route:'/admin' role:'admin' },
      { route:'/dashboard' role:'user' },
      { route:'/discussion' role:'user' }
    ];
    
  const requestLink = request;
}