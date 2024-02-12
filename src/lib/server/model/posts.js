import sqlite3 from 'sqlite3';

//must be absolute path!
//because relative path or $lib doesnt work
const db = new sqlite3.Database('/data/data/com.termux/files/home/node-apps/colab/src/lib/server/database/database.db');

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
      return resolve(row);
    });
  });
}

export async function createPost(channelId,
                                 channelName,
                                 postTitle,
                                 postContent,
                                 authorId,
                                 authorName){
  db.run(`
    INSERT INTO
    posts(channelId,
          channelName,
          postTitle,
          postContent,
          authorId,
          authorName)
    values('${channelId}',
           '${channelName}',
           '${postTitle}',
           '${postContent}',
           '${authorId}',
           '${authorName}');
  `);
}

export async function getPost(postId){
  return new Promise((resolve,reject) => {
    db.get(`
      SELECT * FROM posts
      WHERE postId='${postId}';
    `,
    (err,row) => {
      if(err) reject(err);
      return resolve(row);
    });
  });
}


export async function getPostComments(postId){
  return new Promise((resolve,reject) => {
    const comments = [];
    
    db.each(`
      SELECT * FROM comments
      WHERE postParentId=${postId};
    `,
    (err,row) => {
      if(err) reject(err);
      comments.push(row)
    },
    () => {
      resolve(comments);
    });
  });
}