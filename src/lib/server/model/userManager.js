import sqlite3 from 'sqlite3';

//must be absolute path!
//because relative path or $lib doesnt work
const db = new sqlite3.Database('/data/data/com.termux/files/home/node-apps/colab/src/lib/server/database/database.db');

export function createUser(user){
  //remember to validate it!!!
  //also check if user already exists
  let username = user.username;
  let password = user.password;
  
  db.run(`
    INSERT INTO 
    users(username,password)
    values('${username}','${password}');
  `);
}

export function getUserById(id){
  //validate it again first!!
  db.each(`
    SELECT * from users
    WHERE id=${id};
  `,
  (err,row)=>{
    console.log('Got user:',row)
    return row;
  });
}

export function getUserByUsername(username){
  //validate it again first!!
  db.each(`
    SELECT * from users
    WHERE username=${username};
  `,
  (err,row)=>{
    console.log('Got user:',row)
    return row;
  });
}