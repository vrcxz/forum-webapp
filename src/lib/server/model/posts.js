export async function createChannel(){
  db.run(`
    INSERT INTO
    channels(channelName,channelDescription)
    values();
  `);
}

export async function getChannel(channelName){
  return new Promise((resolve,reject) => {
    db.get(`
      SELECT * FROM channels
      WHERE channelName='${channelName}';
    `,
    (err,row) => {
      if(err) reject(err);
      return resolve(row;
    });
  );
}

export async function createPost(channelName,post,user){
  db.run(`
    INSERT INTO
    posts(postTitle,postContent,authorId,authorName)
    values();
  `);
}