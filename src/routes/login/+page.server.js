import { loginUser } from '$lib/server/security/authentication.js';

export const actions = {
  default: async ({cookies,request,locals}) => {
    const formData = await request.formData();
    await loginUser(cookies,formData,locals);
  }
}