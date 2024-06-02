import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "personalise",
  port: 3306,
  insecureAuth: true,
});

db.connect((err) => {
  if (err) {
    console.error("Erro conectando ao banco de dados");
    throw err;
  }
  console.log("Conectado ao banco");
});
