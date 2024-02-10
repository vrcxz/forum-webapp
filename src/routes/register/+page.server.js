import { registerUser } from '$lib/server/security/authentication.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({cookies,request,locals}) => {
    const formData = await request.formData();
    await registerUser(cookies,formData,locals);
    redirect(302,'/login');
  }
}