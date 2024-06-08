import mysql from "mysql2";
import "dotenv/config";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
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
