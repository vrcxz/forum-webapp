
export async function load({cookies,locals}){
  console.log('dashnoard',locals)
  return {
    username: locals.username ?? ''
  }
}