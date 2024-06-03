import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "blueberry",
  password: "Linux_Mint@",
  database: "personalise",
});
