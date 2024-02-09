import { authenticate } from '$lib/server/security/authentication.js';

export const actions = {
  default: async ({cookies,request,locals}) => {
    const user = await authenticate(cookies,request,locals);
    console.log(user);
  }
}