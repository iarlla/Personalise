<<<<<<< HEAD
import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "blueberry",
  password: "Linux_Mint@",
=======
import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
>>>>>>> main
  database: "personalise",
});
