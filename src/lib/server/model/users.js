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
  return new Promise((resolve,reject)=>{
    db.each(`
      SELECT * from users
      WHERE id=${id};
    `,
    (err,row)=>{
      if(err) reject(err)
      resolve(row)
    });
  });
}

export async function getUserByUsername(username){
  //validate it again first!!
  return new Promise((resolve,reject)=>{
    db.get(`
      SELECT * from users
      WHERE username='${username}';
    `,
    (err,row)=>{
      if(err) reject(err)
      resolve(row)
    });
  });
}

export async function getAllUsers(){
  return new Promise((resolve,reject)=>{
    let users = [];
    
    db.each(`
      SELECT * from users;
    `,
    (err,row)=>{
      if(err) return err;
      users.push(row)
    },
    (err)=>{
      if(err) reject(err)
      resolve(users)
    });
  });
}

export function deleteUserbyId(id){
  db.run(`
    DELETE FROM users
    WHERE id=${id};
  `);
}