import { authenticate } from '$lib/server/model/authentication';

export const actions = {
  default: async ({cookies,request}) => {
    const user = await authenticate(cookies,request);
    console.log(user);
  }
}