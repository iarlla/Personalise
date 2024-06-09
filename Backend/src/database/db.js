import mysql from "mysql2";
import { promisify } from "util";
import "dotenv/config";

// Crie a conexão com o banco de dados
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "personalise",
  port: 3306,
  insecureAuth: true,
});

// Promisify as funções de consulta
export const query = promisify(db.query).bind(db);

(async () => {
  try {
    // Teste a conexão
    await db.promise().getConnection();
    console.log("Conectado ao banco");
  } catch (err) {
    console.error("Erro conectando ao banco de dados");
    throw err;
  }
})();
