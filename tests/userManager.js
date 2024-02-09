import { getUserByUsername,getUserById } from '../src/lib/server/model/userManager.js';

async function test(){
  let res = await getUserByUsername('von')
  console.log(res)
}
test()