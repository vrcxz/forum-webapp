
export async function load({cookies,locals}){
  console.log('dashnoard')
  return {
    data: locals.username
  }
}